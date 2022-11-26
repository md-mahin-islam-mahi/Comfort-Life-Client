import React from 'react';

const Advertisement = ({ furniture }) => {
    const { productName, salerName, condition, price, image } = furniture;


    return (
        <div className="card card-side bg-base-100 shadow-xl my-10 relative">
            <figure><img className='lg:w-auto h-full absolute left-0 rounded-l-2xl' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-semibold text-primary">{productName}</h2>
                <div>
                    <p className='text-2xl text-gray-400'><span className='font-bold'>Seller</span>: {salerName}</p>
                    <p className='text-2xl text-gray-400'><span className='font-bold'>Condition</span>: {condition}</p>
                    <p className='text-2xl text-gray-400'><span className='font-bold'>Price</span>: &{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;