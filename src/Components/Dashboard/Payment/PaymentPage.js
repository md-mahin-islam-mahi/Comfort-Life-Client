import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const PaymentPage = () => {
    const furniture = useLoaderData();
    const {productName} = furniture;

    console.log(furniture);

    const payBill = id => {
        fetch(`http://localhost:5000/payment/${id}`, {
            method: 'PUT',
            headers: {},
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true) {
                toast.success('Payment Successful')
            }
        });
    }

    return (
        <div>
            <h2 className="text-2xl text-gray-400 font-semibold">Welcome to the <br /> <span className='text-4xl text-primary'>Payment Page <br /> <span className='text-3xl'>for {productName}</span></span></h2>
            <div>
                <button onClick={() => payBill(furniture.previousId)} className="btn btn-primary btn-sm">Pay Now</button>
            </div>
        </div>
    );
};

export default PaymentPage;