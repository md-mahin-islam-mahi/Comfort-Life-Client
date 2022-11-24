import React from 'react';
import { Link } from 'react-router-dom';

const CollectionsCard = ({ furniture }) => {

    const { _id, productName, condition, image, } = furniture;


    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt={productName} /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{condition}</p>
                <div className="card-actions justify-end">
                    <Link to={`/furnitures/${_id}`}>
                        <button className="btn btn-primary btn-sm">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollectionsCard;