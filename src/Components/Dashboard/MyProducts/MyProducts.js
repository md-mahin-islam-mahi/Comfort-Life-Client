import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    // useQuery to load data- 1
    const { data: myProducts, isLoading } = useQuery({
        queryKey: ['my-products'],
        queryFn: () => fetch(`http://localhost:5000/furniture/${user.email}`)
            .then(response => response.json())
    });

    if (isLoading) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    const addvertisement = id => {
        fetch(`http://localhost:5000/furniture/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true) {
                toast.success("Added to advertisement")
            };
        })
    }

    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
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
                                <td className='text-xl text-gray-500 text-semibold'>{products.productName}</td>
                                <td className='text-xl text-gray-500 text-semibold'>${products.price}</td>
                                <td className='text-center'>

                                </td>
                                <td>
                                    <button onClick={() => addvertisement(products._id)} className="btn-primary btn-sm rounded-lg text-white font-semibold">Advertisement</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
            </table>
        </div>
    );
};

export default MyProducts;