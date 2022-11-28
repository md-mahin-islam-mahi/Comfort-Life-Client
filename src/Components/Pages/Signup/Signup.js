import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
    const [userType, setUserType] = useState('buyer');
    const { register, handleSubmit } = useForm();
    const { createUser, loader, updateUserProfile, googleSignup } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate();

    if (loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    const handleSignup = data => {
        const email = data.email;
        const password = data.password;

        const currentUser = {
            email: email
        }
        createUser(email, password)
            .then(result => {
                const userInfo = {
                    displayName: data.name,
                }
                updateUserProfile(userInfo)
                    .then(() => { })

                // json web token
                fetch('https://comfort-life-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token);
                    })
                    .catch(err => console.error(err));
                saveUser(data.name, data.email, userType)

            })
            .catch(err => console.error(err));
        toast.success("User created successfully");
        navigate("/");

        const saveUser = (displayName, email, type) => {
            const user = { displayName, email, type };
            fetch('https://comfort-life-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .catch(err => console.error(err));
        }

    };

    const provider = new GoogleAuthProvider();
    const signInGoogle = () => {
        googleSignup(provider)
            .then(result => {
                const user = result.user;
                const savedUser = {
                    displayName: user.displayName,
                    email: user.email,
                    type: userType
                }
                fetch('https://comfort-life-server.vercel.app/users', { // user save to database
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .catch(err => console.error(err));

                // json werb token
                const currentUser = {
                    email: user.email
                };
                fetch('https://comfort-life-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token);
                    })
                if (user.uid) {
                    navigate(from, { replace: true });
                }
            })
            .catch(err => console.error(err));
    }


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
                                <button onClick={signInGoogle} className='btn btn-error btn-outline w-full'>Contineu with Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;