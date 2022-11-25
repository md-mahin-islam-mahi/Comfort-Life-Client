import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);

    const imageKey = process.env.REACT_APP_imgbb_key;

    const addItems = data => {
        fetch('http://localhost:5000/furniture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .catch(err => console.error(err));
        toast.success('Added items successfully')
        navigate("/")

        const image = data.image[0];
        const formData = new FormData();
        formData.append('Image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
           .then(res => res.json())
           .then(imgData => {
            console.log(imgData);
           })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-full md:w-full lg:w-1/2">
                <div className="card w-full min-h-96 shadow-2xl">
                    <form className='pt-10' onSubmit={handleSubmit(addItems)}>
                        <h3 className="text-4xl text-primary font-semibold">Add Your Product</h3>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Your Name</span>
                                </label>
                                <input type="text" value={user?.displayName} className="input input-bordered text-black" {...register("salerName", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Your Location</span>
                                </label>
                                <input type="text" placeholder="Your Location" className="input input-bordered text-black" {...register("location", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Your Phone Number</span>
                                </label>
                                <input type="text" placeholder="Your Phone Number" className="input input-bordered text-black" {...register("phone", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Your Email</span>
                                </label>
                                <input type="email" value={user?.email} readOnly placeholder="Your Email" className="input input-bordered text-black" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product Name" className="input input-bordered text-black" {...register("productName", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Price</span>
                                </label>
                                <input type="text" placeholder="price" className="input input-bordered text-black" {...register("price", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Condition</span>
                                </label>
                                <input type="text" placeholder="condition" className="input input-bordered text-black" {...register("condition", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Purchasing Year</span>
                                </label>
                                <input type="text" placeholder="puechasing year" className="input input-bordered text-black" {...register("year", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-gray-600">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered text-black" placeholder="Description" {...register("description", { required: true })}></textarea>
                            </div>
                            <div className="form-control">
                                <label htmlFor='image' className="label">
                                    <span className="border rounded-md p-3 text-xl text-gray-600 cursor-pointer">Product Image (Click)</span>
                                </label>
                                <input id='image' type="file" hidden placeholder="" className="input input-bordered text-black" {...register("image", { required: true })} />
                            </div>


                            <div className="form-control mt-6">
                                <input className='btn btn-primary text-white text-xl' type="submit" value="Add Product" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;