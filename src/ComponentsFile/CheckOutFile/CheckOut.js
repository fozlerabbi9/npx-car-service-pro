import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDitlesFun from '../HooksFile/useServiceDitles';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-bootstrap';


const CheckOut = () => {
    const { detailesId } = useParams();
    const [service, setService] = useServiceDitlesFun({});
    const [user] = useAuthState(auth);
    // console.log(user);
    // const [user, setUser] = useState({
    //     name: "https://calm-basin-38280.herokuapp.com/ boy",
    //     email: 'cool@hot.com',
    //     phone: '017111111111',
    //     address: 'kodimpara'
    // })
    // const handleAddressChange = e => {
    //     console.log(e.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    //     console.log(address, rest, newUser);
    // }
    const handlePlaceOrder = (e) =>{
        e.preventDefault();
        const order = {
            name: user.displayName,
            email : user.email,
            service : service.name,
            serviceId : detailesId,
            address : e.target.address.value,
            phone : e.target.phone.value,
        }
        axios.post('https://calm-basin-38280.herokuapp.com/order', order)
        .then(res =>{
            const {data} = res;
            if(data.insertedId){
                toast("Your Order is booked")
                e.target.reset();
            }
            // console.log(res)
        })
        // console.log(order);
    }
    return (
        <div>
            <h5 className='mt-5 pt-5'>this is checkOut page</h5>
            <h3>Plz Order : {service?.name}</h3>
            <div className='d-flex justify-content-evenly align-items-center w-50 mx-auto'>
                <img style={{ width: 150 }} src={service?.img} alt="" />
                <p>Price = {service?.price} $ </p>
            </div>

            <form className='mt-3' onSubmit={handlePlaceOrder}>
                <input className='mb-2 w-25' type="text" value={user.displayName} name='name' placeholder='name' readOnly required /><br />
                <input className='mb-2 w-25' type="email" value={user.email} name='email' placeholder='email' readOnly required /><br />
                <input className='mb-2 w-25' type="text"  name='address' placeholder='address' required /><br />
                <input className='mb-2 w-25' type="text" value={service?.name} name='service' placeholder='service' readOnly required /><br />
                <input className='mb-2 w-25' type="text" name='phone' placeholder='phone' autoComplete='off' required /><br />
                <input type="submit" value='Plz Order Here' /><br />
            </form>
            {/* <form className='mt-3'>
                <input className='mb-2 w-25' type="text" value={user.name} name='name' placeholder='name' required /><br />
                <input className='mb-2 w-25' type="email" value={user.email} name='email' placeholder='email' required /><br />
                <input className='mb-2 w-25' onChange={handleAddressChange} type="text" value={user.address} name='address' placeholder='address' required /><br />
                <input className='mb-2 w-25' type="text" value={service?.name} name='service' placeholder='service' required /><br />
                <input className='mb-2 w-25' type="text" value={user.phone} name='phone' placeholder='phone' required /><br />
                <input type="submit" value='Plz Order Here' /><br />
            </form> */}
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default CheckOut;