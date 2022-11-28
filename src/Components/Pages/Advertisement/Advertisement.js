import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const Advertisement = ({ furniture }) => {
    const { productName, sellerEmail, sellerName, condition, price, image } = furniture;

    const { data: seller = [] } = useQuery({
        queryKey: 'seller',
        queryFn: async () => {
            const res = await fetch(`https://comfort-life-server.vercel.app/users/${sellerEmail}`);
            const data = await res.json();
            return data;
        }
    });

    return (

        <>
            {
                furniture.isAvailable === "true" &&
                <div className="card w-80 hover:translate-x-2 hover:shadow-2xl bg-base-100 shadow-sm image-full transition hover:translate-y-5 duration-400 ease-in-out">
                    <figure><img src={image} alt={productName} /></figure>
                    <div className="card-body text-start">
                        <h2 className="text-4xl transition duration-500 ease-in font-semibold text-primary">{productName}</h2>
                        <div className='mt-5'>
                            <p className='text-2xl text-gray-300 flex items-center'>
                                <span className='font-bold'>Seller</span>:
                                {sellerName}
                                {
                                    seller.isVarified && <FaCheckCircle className='ml-3 text-blue-500' />
                                }
                            </p>
                            <p className='text-2xl text-gray-300'><span className='font-bold'>Condition</span>: {condition}</p>
                            <p className='text-2xl text-gray-300'><span className='font-bold'>Price</span>: ${price}</p>
                        </div>
                    </div>
                </div>
            }


        </>
    );
};

export default Advertisement;