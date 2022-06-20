import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDataFun from '../DataLoadedFile/LoadData';
import useServiceDitlesFun from '../HooksFile/useServiceDitles';
import './ServiceDetai.css';

const ServiceDetail = () => {
    const { detailesId } = useParams();
    // const [services] = useDataFun();
    // console.log(detailesId);
    // const service = services.find(service => console.log(service._id));
    // const service = services.find(service => service._id === detailesId);
    // console.log(service);
    //https://calm-basin-38280.herokuapp.com/service/6293965101fa9257177288ca
    const [service, setService] = useServiceDitlesFun({});
    // useEffect(() => {
    //     // fetch("services.json")
    //     fetch(`https://calm-basin-38280.herokuapp.com/service/${detailesId}`)
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [])
    // console.log(service);
    const navigate = useNavigate();
    const navigetFun = (id) => {
        navigate(`/checkOut/${id}`)
    }
    return (
        <div className='mt-5 pt-5'>
            <h2>wilcome to detaile</h2>
            <h3>Cart Id : {detailesId}</h3>
            <h4>Name : {service?.name}</h4>
            <img src={service?.img} alt="" />
            <h3>Price = {service?.price}</h3>
            <button onClick={() => navigetFun(detailesId)} className='btn btn-primary'>Procied checkOut</button>
        </div>
    );
};

export default ServiceDetail;