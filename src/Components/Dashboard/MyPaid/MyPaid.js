import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyPaid = () => {
    const { user } = useContext(AuthContext)

    const { data: paidItems = [], isLoading, refetch } = useQuery({
        queryKey: 'paid',
        queryFn: async () => {
            const res = await fetch(`https://comfort-life-server.vercel.app/paid/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const deleteItem = id => {
        fetch(`https://comfort-life-server.vercel.app/paid/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
           .then(res => res.json())
           .then(data => {
            if (data.acknowledged === true) {
                toast.success('Items deleted successfully')
                refetch()
            }
           })
    }


    return (
        <div>
            <h3 className="text-4xl text-primary font-semibold my-20">Paid Items Here</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                            <th className='bg-white text-gray-400 text-start text-sm'></th>
                            <th className='bg-white text-gray-400 text-start text-sm'>Name</th>
                            <th className='bg-white text-gray-400 text-start text-sm'>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            paidItems.map((item, i) => <tr key={item._id}>
                                <th className='text-xl text-gray-500 text-semibold'>{i + 1}</th>
                                <th className='text-xl text-gray-500 text-semibold'>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={item.image} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </th>
                                <td className='text-xl text-gray-500 text-semibold'>{item.productName}</td>
                                <td className='text-xl text-gray-500 text-semibold'>${item.price}</td>
                                <td className='text-center'>

                                </td>
                                <td>
                                </td>
                                <td><p onClick={() => deleteItem(item._id)} className='btn btn-xs btn-outline btn-error'>Revove</p>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyPaid;