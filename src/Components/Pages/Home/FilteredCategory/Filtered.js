import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Filtered = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div>
            
        </div>
    );
};

export default Filtered;