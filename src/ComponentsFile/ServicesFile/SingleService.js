import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({ service }) => {
    const { name, img, description, price, _id } = service;

    const navigate = useNavigate();
    const showDitlesFun = (_id) => {
        navigate(`/serviceDetailes/${_id}`)
    }
    return (
        <div className='child-style'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <button onClick={() => showDitlesFun(_id)} className='btn btn-primary'>Book : {name}</button>
        </div>
    );
};

export default SingleService;