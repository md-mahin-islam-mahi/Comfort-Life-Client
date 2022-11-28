import React, { useContext } from 'react';
import toast from 'react-hot-toast';
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
                        <figure><img src={image} alt={productName} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-gray-500">{productName}</h2>
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-400 divider">User Info</h2>
                                <h3 className="text-xl text-primary">{user.displayName}</h3>
                                <p className='text-gray-400'>{user.email}</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <div className='text-gray-400 text-start'>
                                    <h3 className="text-xl text-primary font-semibold">Seler Info</h3>
                                    <p className="">{sellerName}</p>
                                    <p>{email}</p>
                                    <p>{phone}</p>
                                    <p>{location}</p>
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
                                <button onClick={() => addToWishlist(email)} className="btn btn-primary btn-sm text-sm text-white font-semibold">Add to wishlist</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default DetailModa;