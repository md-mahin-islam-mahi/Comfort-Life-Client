import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../Shared/Header/Header';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const { loader, user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            });
    }, [user.email])
    console.log(currentUser);

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
                    <ul className="menu p-4 w-80 text-primary text-2xl font-semibold">
                        <li>
                            {
                                currentUser?.type === "seller" &&
                                <>
                                    <Link to="/dashboard/add-item">Add a Product</Link>
                                    <Link to="/dashboard/my-products">My Products</Link>
                                    <Link>My Buyers</Link>
                                </>
                            }
                        </li>

                        <li>
                            {
                                currentUser?.type === "buyer" &&
                                <>
                                    <Link to="/dashboard/my-orders">My Orders</Link>
                                </>
                            }
                        </li>

                        <li>
                            {
                                currentUser?.type === "admin" &&
                                <>
                                    <Link to="/dashboard/admin/all-buyers">All Buyers</Link>
                                    <Link to="/dashboard/admin/all-seller">All Sellers</Link>
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