import React from 'react';
import useDataFun from '../DataLoadedFile/LoadData';

const MansgeServices = () => {
    const [services, setServices] = useDataFun();

    const handleDelete = (id) => {
        const procied = window.confirm("r u sure to delete this");
        if (procied) {
            fetch(`https://calm-basin-38280.herokuapp.com/service/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remening = services.filter(service => service._id !== id);
                setServices(remening);
            })
        }
    }
    return (
        <div className='mt-5 pt-5'>
            <h2>this is manage page</h2>
            <h3>Total data {services.length}</h3>

            <h1 className='mt-4 mb-2'>All services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service?.name} <button onClick={() => handleDelete(service._id)}>X</button> </h4>
                </div>)
            }
        </div>
    );
};

export default MansgeServices;