import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../Shared/Header/Header';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const { loader, user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://comfort-life-server.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            });
    }, [user?.email])

    // useEffect( () => {
    //     fetch('https://comfort-life-server.vercel.app/users')
    // }, [])

    if (loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-primary text-2xl font-semibold bg-white">
                        <li>
                            <Link to="/dashboard/add-item/">Add a Product</Link>
                            <Link to="/dashboard/my-products">My Products</Link>
                            <Link to="/dashboard/my-orders">My Orders</Link>
                            <Link to="/dashboard/payment-history">Payment History</Link>
                        </li>

                        <li>
                            {
                                currentUser?.type === "admin" &&
                                <>
                                    <Link to="/dashboard/admin/all-buyers/buyer">All Buyers</Link>
                                    <Link to="/dashboard/admin/all-seller/seller">All Sellers</Link>
                                </>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;