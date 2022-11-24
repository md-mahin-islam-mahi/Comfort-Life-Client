import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Furnitures = () => {
    const furniture = useLoaderData();
    const { productName, salerName, phone, email, price, condition, image, } = furniture;
    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt={productName} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-gray-500">{productName}</h2>
                <div className=' text-center lg:text-start text-gray-500 font-semibold text-xl'>
                    <p>Saler: {salerName}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Price: ${price}</p>
                    <p>Condition: {condition}</p>
                </div>
                <div className="card-actions justify-center lg:justify-end my-5">
                    <button className="btn btn-primary text-white text-xl font-semibold">Add to wish list</button>
                </div>
            </div>
        </div>
    );
};

export default Furnitures;