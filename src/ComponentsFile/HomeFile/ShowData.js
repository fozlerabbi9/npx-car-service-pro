import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowData = ({service}) => {
    const {_id, name, img, description, price} = service;

    const navigate = useNavigate();
    const getCartId = (id) =>{
        navigate(`/serviceDetailes/${id}`)
    }
    
    return (
        <div className='child-style'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <button onClick={()=> getCartId(_id)} className='btn btn-primary'>Book :{name}</button>
        </div>
    );
};

export default ShowData;
