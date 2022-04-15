import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetai.css';

const ServiceDetail = () => {
    const {detailesId} = useParams();
    return (
        <div className='mt-5 pt-5'>
            <h3>wilcome to detaile</h3>
            <h3>Cart Id : {detailesId}</h3>            
        </div>
    );
};

export default ServiceDetail;