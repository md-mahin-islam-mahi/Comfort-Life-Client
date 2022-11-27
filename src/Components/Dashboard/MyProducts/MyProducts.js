import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    // useQuery to load data- 1
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            fetch(`http://localhost:5000/furniture/${user.email}`)
                .then(response => response.json())
    });

    if (isLoading) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    const addvertisement = id => {
        fetch(`http://localhost:5000/furniture/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Added to advertisement")
                    refetch()
                };
            })
    }

    return (
        <div>
            <h3 className="text-3xl text-primary text-semibold my-10">Your Products</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                            <th className='bg-white text-gray-400 text-start text-sm'>Name</th>
                            <th className='bg-white text-gray-400 text-start text-sm'>Price</th>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((products, i) => <tr key={products._id}>
                                <th className='text-xl text-gray-500 text-semibold'>{i + 1}</th>
                                <th className='text-xl text-gray-500 text-semibold'>
                                    <div className="avatar">
                                        <div className="w-20 rounded">
                                            <img src={products.image} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </th>
                                <td className='text-xl text-gray-500 text-semibold'>{products.productName}</td>
                                <td className='text-xl text-gray-500 text-semibold'>${products.price}</td>
                                <td className='text-center'>

                                </td>
                                <td>
                                    {
                                        products.isAvailable === 'true' ?
                                            <p className='text-primary font-semibold'>Product is available</p>
                                            : <p className='text-red-500 font-semibold'>Product is not available</p>
                                    }

                                </td>
                                <td>
                                    {
                                        products.advertise !== 'true' ?
                                            <button
                                                onClick={() => addvertisement(products._id)}
                                                className="btn-primary btn-sm rounded-lg text-white font-semibold">
                                                Advertisement
                                            </button>
                                            : <p className='text-gray-500 font-semibold'>Advertisement added</p>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;