import React from 'react';

const ProductItems = ({ products }) => {
    const { salerName, productName, image } = products;
    return (
        <div>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div className='mr-20'>
                            <div className="font-bold">{salerName}</div>
                        </div>
                    </div>
                </td>
                <td className='ml-20'>{productName}</td>
                <th>
                    <button className="btn btn-error btn-xs text-white">Delete</button>
                </th>
            </tr>
        </div>
    );
};

export default ProductItems;