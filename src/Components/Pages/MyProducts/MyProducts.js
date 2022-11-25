import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default MyProducts;