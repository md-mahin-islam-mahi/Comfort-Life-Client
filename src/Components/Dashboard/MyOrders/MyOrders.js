import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const { user, loader } = useContext(AuthContext);
    const [furnitures, setFurnitures] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFurnitures(data));
    }, [user?.email])

    if (loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            furnitures.map(furniture => <OrderCard
                            key={furniture._id}
                            furniture={furniture}
                            ></OrderCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;