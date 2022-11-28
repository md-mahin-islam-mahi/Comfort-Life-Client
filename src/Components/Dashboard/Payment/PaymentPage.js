import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const PaymentPage = () => {
    const furniture = useLoaderData();
    const { productName } = furniture;

    const stripePromise = loadStripe(process.env.REACT_APP_PK);

    const payBill = id => {
        fetch(`http://localhost:5000/payment/${id}`, {
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

                    fetch(`http://localhost:5000/furniture/${id}`, {
                        method: 'DELETE',
                        headers: {},
                    })
                        .then(res => res.json())
                        .catch(err => console.error(err))


                    fetch(`http://localhost:5000/furniture-delete/${id}`, {
                        method: 'DELETE',
                        headers: {},
                    })
                        .then(res => res.json())
                        .catch(err => console.error(err))
                }
            });
    }

    return (
        <div>
            <h2 className="text-2xl text-gray-400 font-semibold">Welcome to the <br /> <span className='text-4xl text-primary'>Payment Page <br /> <span className='text-3xl'>for {productName}</span></span></h2>
            
            <div className='lg:px-80 my-20'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm furniture={furniture}/>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;