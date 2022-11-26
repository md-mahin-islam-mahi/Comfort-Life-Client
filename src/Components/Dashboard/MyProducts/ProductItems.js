import React from 'react';
import { Link } from 'react-router-dom';

const ProductItems = ({ products }) => {
    const { salerName, productName, image } = products;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="avatar rounded w-24 h-24">

                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-gray-500">{productName}</div>
                    </div>
                </div>
            </td>
            <td>
                ${ }
            </td>
            <td>
                <button className="btn-primary btn-sm rounded-lg text-white font-semibold">Addvertisement</button>
            </td>
            <th>
                <label>
                    <button className='btn btn-error btn-xs'>X</button>
                </label>
            </th>
        </tr>
    );
};

export default ProductItems;