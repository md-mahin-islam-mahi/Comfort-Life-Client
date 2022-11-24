import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const [userType, setUserType] = useState('buyer');
    const { register, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = data => {
        const email = data.email;
        const password = data.password;
        const displayName = data.name;
        const type = userType;

        const user = {
            displayName,
            email,
            type
        }
        console.log(user);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
        toast.success("User created successfully");
        navigate("/");

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)

        })
    };


    return (
        
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full min-h-96 max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Full Name</span>
                                </label>
                                <input type="text" placeholder="full name" className="input input-bordered text-black" {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered text-black" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered text-black" {...register("password", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Select Option</span>
                                </label>
                                <select onChange={e => setUserType(e.target.value)} className='outline-none text-gray-500 text-xl' name="User Type">
                                    <option value="buyer">Buyer</option>
                                    <option value="saller">Saller</option>
                                </select>
                            </div>
                            <p className="text-sm text-gray-500">You have choosen to create a <span className='text-primary font-semibold'>{userType}</span> account</p>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign Up" />
                            </div>
                            <p className='text-gray-500'>Already have an account? Please <Link to="/login"><span className='text-primary font-semibold'>Login</span></Link></p>
                            <div className="divider">OR</div>
                            <div>
                                <button className='btn btn-accent btn-outline w-full'>Signup with Google</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Signup;