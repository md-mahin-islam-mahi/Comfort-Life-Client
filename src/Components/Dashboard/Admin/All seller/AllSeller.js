import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'

const AllSeller = () => {
    const sellers = useLoaderData();

    // admin removing seller
    const deleteOrder = id => {
        fetch(`https://comfort-life-server.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                alert("Are you sure you want to delete?")
                if (data.acknowledged === true) {
                    toast.success("Removed seller successfully");
                }
            })
    }

    const verifySeller = id => {
        fetch(`https://comfort-life-server.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                alert("Are you sure this seller is varified?")
                if (data.acknowledged === true) {
                    toast.success("Varified seller successfully");
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                            <th className='bg-white text-gray-400 text-start text-sm'>Name</th>
                            <th className='bg-white text-gray-400 text-start text-sm'>email</th>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th className='text-xl text-gray-500 text-semibold'>{i + 1}</th>
                                    <td className='text-xl text-gray-500 text-semibold flex items-center'><p>{seller.displayName}</p>
                                    {
                                        seller.isVarified === true && <FaCheckCircle className='ml-3 text-primary' />
                                    }
                                    </td>
                                    <td className='text-xl text-gray-500 text-semibold'>${seller.email}</td>
                                    <td>
                                        {
                                            seller.isVarified!== true ? <p onClick={() => verifySeller(seller._id)} className='btn btn-xs btn-outline btn-primary'>Varify</p> 
                                            : 
                                            <p>Seller is varified</p>
                                        }
                                    </td>
                                    <td>
                                        <p onClick={() => deleteOrder(seller._id)} className='btn btn-xs btn-outline btn-error'>Delete</p>
                                    </td>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllSeller;