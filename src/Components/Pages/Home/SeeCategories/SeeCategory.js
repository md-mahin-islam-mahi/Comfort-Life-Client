import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import CategoryCard from './CategoryCard';

const SeeCategory = () => {
    const {loader} = useContext(AuthContext)
    const furnitures = useLoaderData();

    if(loader) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    return (
        <div>
            <h3 className="text-4xl text-primary font-semibold my-5">Out Categories</h3>
            <div className='grid grid-cols-1 md:geid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-20 my-20 mx-3 lg:ml-20'>
                {
                    furnitures.map(furniture => <CategoryCard
                        key={furniture._id}
                        furniture={furniture}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default SeeCategory;