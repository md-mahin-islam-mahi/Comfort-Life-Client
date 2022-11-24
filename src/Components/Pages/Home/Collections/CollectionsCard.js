import React from 'react';

const CollectionsCard = ({ furniture }) => {
    const { name, image, about } = furniture;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-500">{name}</h2>
                <p className='text-gray-400'>{about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm text-white my-5">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default CollectionsCard;