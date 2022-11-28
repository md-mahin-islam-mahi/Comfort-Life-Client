import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ furniture }) => {
    const { _id, previousId, price, buyerEmail } = furniture;
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price])

    const stripe = useStripe();

    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: buyerEmail,
                    },
                },
            },
        );

        if (confirmationError) {
            setCardError(confirmationError.message);
            return;
        }
        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            toast.success("Payment success")
        }

        fetch(`http://localhost:5000/payment/${previousId}`, {
            method: 'PUT',
            headers: {},
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Payment Successful')
                    fetch('http://localhost:5000/paid', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(furniture),
                    })
                        .then(res => res.json())
                        .catch(err => console.error(err))

                    fetch(`http://localhost:5000/order/${previousId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => res.json())
                        .catch(err => console.error(err))


                    fetch(`http://localhost:5000/paid/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => res.json())
                        .catch(err => console.error(err))
                }
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm rounded-xl' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 mt-20'>{cardError}</p>
        </div>
    );

};

export default CheckoutForm;