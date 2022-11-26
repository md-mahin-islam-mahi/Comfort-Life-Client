import React from 'react';

const CollectionsCard = ({ option, setFruniture }) => {


    const { productName, condition, image, } = option;


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl overflow-hidden h-40">
                <figure><img className='h-full w-full' src={image} alt={productName} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{condition}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => setFruniture(option)} className="btn btn-primary btn-sm">
                            <label htmlFor="detail-modal">Detail</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CollectionsCard;