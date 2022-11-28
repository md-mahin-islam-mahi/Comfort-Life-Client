import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const CollectionsCard = ({ option, setFruniture }) => {
    const { productName, condition, image, description, sellerName, sellerEmail, price } = option;

    
    const { data: seller = [] } = useQuery({
        queryKey: 'user',
        queryFn: async () => {
            const res = await fetch(`https://comfort-life-server.vercel.app/users/${sellerEmail}`);
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure>
                    <img className='h-80' src={image} alt={productName} />
                </figure>
                <div className="card-body text-start">
                    <h2 className="text-2xl font-semibold text-gray-400">Product: {productName}</h2>
                    <p className='text-gray-400 flex items-center'>
                        Seller:
                        <span className='font-semibold ml-3'> {sellerName}</span>
                        {
                            seller.isVarified === true && <FaCheckCircle className='ml-3 text-blue-500' />
                        }
                    </p>
                    <p className='text-gray-400'>Condition: {condition}</p>
                    <p className='text-gray-400'>Price: ${price}</p>
                    <p className='text-gray-400'>{description}</p>
                    <div className="card-actions justify-end">
                        {
                            option.isAvailable === 'true' ?
                                <button onClick={() => setFruniture(option)} className="btn btn-primary btn-sm">
                                    <label htmlFor="detail-modal">Detail</label>
                                </button>
                                :
                                <button className="btn btn-ghost text-gray-400">Not Available</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CollectionsCard;