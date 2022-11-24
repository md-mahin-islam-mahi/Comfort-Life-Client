import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../Shared/Header/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContext)

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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/add-item">Add Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;