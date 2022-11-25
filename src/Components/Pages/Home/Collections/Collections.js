import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import CollectionsCard from './CollectionsCard';
import DetailModa from './DetailModa';

const Collections = () => {
    const furnitures = useLoaderData()
    const [furniture, setFruniture] = useState({});
    const { loader } = useContext(AuthContext);

    if (loader) {
        return <div>Loading...</div>
    }
    return (
        <div>
                <h2 className="text-3xl text-gray-500 font-semibold my-10">Our Collections</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-40 mx-auto p-10'>
                {
                    furnitures.map(option => <CollectionsCard
                        key={option._id}
                        option={option}
                        setFruniture={setFruniture}
                        furniture={furniture}
                    ></CollectionsCard>)
                }
            </div>
            <div>
                {
                    furniture && <DetailModa
                        furniture={furniture}
                    ></DetailModa>
                }
            </div>
        </div>
    );
};

export default Collections;