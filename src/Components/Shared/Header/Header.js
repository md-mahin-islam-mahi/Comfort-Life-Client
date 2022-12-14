import { logDOM } from '@testing-library/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);

    const signOut = () => {
        signOutUser()
        .then(() => {})
        .catch(() => {})
    }
    const navbarItems = 
    <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {
            user?.uid ? <li><p onClick={signOut}>Log Out</p></li> : <li><Link to="/login">Login</Link></li>
        }
        <li><Link to="/blog">Blog</Link></li>
    </>
    return (
        <div className="navbar text-xl">
            <div className="navbar-start">
                <Link to="/"><img className='w-40 hidden lg:flex' src="logo.png" alt="" /></Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary font-semibold">
                        {navbarItems}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-primary font-semibold">
                        {navbarItems}
                    </ul>
                </div>
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            </div>
        </div>
    );
};

export default Header;