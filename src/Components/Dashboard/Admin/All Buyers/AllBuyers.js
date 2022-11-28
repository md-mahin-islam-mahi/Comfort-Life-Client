import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const buyers = useLoaderData();

    // admin removing buyer
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
                    toast.success("Removed buyer successfully");
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
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th className='text-xl text-gray-500 text-semibold'>{i + 1}</th>
                                <td className='text-xl text-gray-500 text-semibold'>{buyer.displayName}</td>
                                <td className='text-xl text-gray-500 text-semibold'>${buyer.email}</td>
                                <td className='text-center'>

                                </td>
                                {/* <td>
                                    {
                                        furniture.payment === "true" ? <p>Paid</p> : <button className="btn-primary btn-sm rounded-lg text-white font-semibold">
                                        <Link to={`/dashboard/payment/${furniture.previousId}`}>
                                            Purchase
                                        </Link>
                                    </button>
                                    }
                                    
                                </td> */}
                                <td><p onClick={() => deleteOrder(buyer._id)} className='btn btn-xs btn-outline btn-error'>Delete</p>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBuyers;