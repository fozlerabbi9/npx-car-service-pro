import React from 'react';
import { useForm } from "react-hook-form";


const Addservice = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://calm-basin-38280.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
        // console.log(data)
    };

    return (
        <div className='mt-5 pt-5'>
            <h3>Added your new service here</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto"  >
                <input className='mb-2 w-100' placeholder='Enter your Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <textarea className=' w-100' placeholder='Enter your description' {...register("description")} /> <br />
                <input className='mb-2 w-100' placeholder='Enter Amount' type="number" {...register("price")} /> <br />
                <input className='mb-2 w-100' placeholder='Photo Url' type="text" {...register("img")} /> <br />
                <input className='mb-2 w-100' type="submit" value='add service' />
            </form>
        </div>
    );
};

export default Addservice;