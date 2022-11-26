import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const [userType, setUserType] = useState('buyer');
    const { register, handleSubmit } = useForm();
    const {createUser, loader, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }
    
    const handleSignup = data => {
        const email = data.email;
        const password = data.password;
        // const displayName = data.name;
        // const type = userType;

        createUser(email, password)
        .then(result => {
            const userInfo = {
                displayName: data.name,
            }
            updateUserProfile(userInfo)
            .then(() => {})
            .catch(err => console.error(err));
            saveUser(data.name, data.email, userType)
            
        })
        .catch(err => console.error(err));
        toast.success("User created successfully");
        navigate("/");

        const saveUser = (displayName, email, type) => {
            const user = {displayName, email, type};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .catch(err => console.error(err));
        }

        // fetch('http://localhost:5000/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user)

        // })
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
                                    <option value="seller">Seller</option>
                                </select>
                            </div>
                            <p className="text-sm text-gray-500">You have choosen to create a <span className='text-primary font-semibold'>{userType}</span> account</p>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary text-white text-xl' type="submit" value="Sign Up" />
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