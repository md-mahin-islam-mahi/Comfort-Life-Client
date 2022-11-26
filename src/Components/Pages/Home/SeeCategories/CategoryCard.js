import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ furniture }) => {
    const { category, imageURL } = furniture;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={imageURL} alt={category} /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-gray-500 text-center font-semibold">{category} Category</h2>
                <div className="card-actions justify-end">
                    <Link to={`/collections/${category}`}>
                        <button className="btn btn-primary btn-sm text-white my-5">Explore {category}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;