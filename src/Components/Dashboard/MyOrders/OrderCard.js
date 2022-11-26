import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const OrderCard = ({ furniture }) => {
    const { _id, productName } = furniture;
    const [newOrders, setNewOrders] = useState([]);
    const { loader } = useContext(AuthContext);

    const deleteItem = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Deleted successfully");
                    setNewOrders(data)
                }
                console.log(newOrders)
            })
    }


    if (loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }



    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="avatar rounded w-24 h-24">

                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-gray-500">{productName}</div>
                    </div>
                </div>
            </td>
            <td>
                ${ }
            </td>
            <td>
                <Link to="/dashboard/payment">
                    <button className="btn-primary btn-sm rounded-lg text-white font-semibold">Purchase</button>
                </Link>
            </td>
            <th>
                <label>
                    <button onClick={() => deleteItem(_id)} className='btn btn-error btn-xs'>X</button>
                </label>
            </th>
        </tr>
    );
};



export default OrderCard;