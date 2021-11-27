import React from 'react';
import './Error.css';
import image from '../../images/error.jpg';
const Error = () => {
    return (
        <div className="error-area">
           <h1 className="text-danger">Page Not Found.404!</h1> 
           <div>
            <img className="img-fluid" src={image} alt="" />
           </div>
        </div>
    );
};

export default Error;