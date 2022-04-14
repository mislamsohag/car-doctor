import React from 'react';
import './Service.css';


const Service = ({ service }) => {
    // console.log(service);
    const { name, price, img, description } = service;
    return (
        <div className='service-container'>
            <img src={img} alt="Car Serviceing Image" />
            <h3>{name}</h3>
            <h5>Price : {price} $</h5>
            <p>{description}</p>
            <button>Book this Service</button>

        </div>
    );
};

export default Service;