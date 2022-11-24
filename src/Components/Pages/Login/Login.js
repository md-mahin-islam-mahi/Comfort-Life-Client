import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full min-h-96 max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-500">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered text-black" {...register("email", { required: true })}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-500">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered text-black" {...register("password", { required: true })}/>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                        <p className='text-gray-500'>Don't have an account? Please <Link to="/signup"><span className='text-primary font-semibold'>Sign Up</span></Link></p>
                        <div className="divider">OR</div>
                    <div>
                        <button className='btn btn-accent btn-outline w-full'>Contineu with Google</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;