import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const DetailModa = ({ furniture }) => {
    const { _id, productName, condition, image, price, sellerName, email, phone, location, year } = furniture;
    const { user } = useContext(AuthContext);

    const addToWishlist = () => {

        const product = {
            productName,
            sellerName: sellerName,
            sellerEmail: email,
            buyerEmail: user.email,
            price: price,
            image: image,
            previousId: _id
        }

        fetch(`https://comfort-life-server.vercel.app/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        toast.success("Product added to wishlist successfully");
    }

    return (
        <>
            <input type="checkbox" id="detail-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="detail-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <figure>
                            <img className='w-80 h-auto mx-auto hover:shadow-xl hover:rounded-lg hover:w-full hover:h-full duration-300' src={image} alt={productName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-gray-500">Category: {productName}</h2>
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-400 divider">User Info</h2>
                                <h3 className="text-xl text-primary">{user?.displayName}</h3>
                                <p className='text-gray-400'>{user?.email}</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <div className='text-gray-400 text-start'>
                                    <h3 className="text-xl text-primary font-semibold">Seler Info</h3>
                                    <p className="">Name: {sellerName}</p>
                                    <p>Email: {email}</p>
                                    <p>Phone: {phone}</p>
                                    <p>Address: {location}</p>
                                </div>
                                <div className='text-gray-400 text-start'>
                                    <h3 className="text-xl text-primary font-semibold">Product Info</h3>
                                    <p>Price: ${price}</p>
                                    <p>Condition: {condition}</p>
                                    <p>Purchasing Year: {year}</p>
                                </div>
                            </div>
                            <h3 className="text-xl text-gray-500">For more info. Please contact me</h3>
                            <div className="card-actions justify-end">
                                {
                                    user ? <button onClick={() => addToWishlist(email)} className="btn btn-primary btn-sm text-sm text-white font-semibold">Add to wishlist</button>
                                        :
                                        <p className='text-red-500'>To add product to your wishlist, you have <Link className='text-primary font-semibold' to="/login">Login</Link> first.</p>
                                }

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default DetailModa;