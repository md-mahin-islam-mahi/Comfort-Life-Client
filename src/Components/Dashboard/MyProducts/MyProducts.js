import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductItems from './ProductItems';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: myProducts, isLoading } = useQuery({
        queryKey: ['my-products'],
        queryFn: () => fetch(`http://localhost:5000/furniture/${user.email}`)
            .then(response => response.json())
    });

    if (isLoading) {
        return <div className='min-h-screen'><h3 className='text-3xl text-primary mt-80'>Loading...</h3></div>
    }

    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    {
                        myProducts.map(products => <ProductItems
                            key={products._id}
                            products={products}
                        ></ProductItems>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;