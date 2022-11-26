import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, loader } = useContext(AuthContext);
    const location = useLocation();
    const navigateTo = useNavigate();
    const from = location.state?.from?.pathname || "/"

    if (loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>;
    }

    const loginUser = data => {

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    toast.success("Login successful")
                    navigateTo(from, { replace: true });
                }
            })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full min-h-96 max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(loginUser)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered text-black" {...register("email", { required: true })} />
                                {errors.email && <div className="error text-red-600">{errors.email.message}</div>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered text-black" {...register("password", { required: true })} />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary text-white text-xl' type="submit" value="Login" />
                            </div>
                            <p className='text-gray-500'>Don't have an account? Please <Link to="/signup"><span className='text-primary font-semibold'>Sign Up</span></Link></p>
                            <div className="divider">OR</div>
                            <div>
                                <button className='btn btn-accent btn-outline w-full'>Contineu with Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;