import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white">{children}</button>
    );
};

export default Button;