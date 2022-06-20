// import axios, { Axios, AxiosError } from 'axios';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../Api';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orderData, setOrderData] = useState([]);
    const navigate = useNavigate();
    // useEffect(() => {
    //     // console.log(orderData)
    // }, [orderData])
    console.log(orderData)

    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `https://calm-basin-38280.herokuapp.com/order?email=${email}`;
            try {
                // const { data } = await axios.get(url, {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')} `
                //     }
                // });
                const { data } = await axiosPrivate.get(url);
                console.log(data)
                setOrderData(data)
            }
            catch (error) {
                console.log(error.message);
                if(error?.response?.status === 401 || error?.response?.status === 403){
                    signOut(auth);
                    navigate("/login")
                }
            };
        }
        getOrder();

        // try {
        //     fetch(`https://calm-basin-38280.herokuapp.com/order?email=${email}`, {
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //             const res = Array.isArray(data);
        //             console.log(res)
        //             if (!res) {
        //                 signOut(auth);
        //                 navigate('/login')
        //             }
        //             else {
        //                 setOrderData(data)
        //             }
        //         })
        //     // .catch((error) => {
        //     //     console.log(error)
        //     // }
        //     // )
        // }
        // catch (error) {
        //     console.log(error);
        // };

        // const url = `https://calm-basin-38280.herokuapp.com/order?email=${email}`;
        // try {
        //     const { data } = axiosPrivate.get(url);
        //     setOrderData(data);
        // }
        // catch (error) {
        //     // let erl = error as AxiosError;
        //     // console.log(erl)
        //     console.log(error);
        //     if (error?.response?.status === 401 || error?.response?.status === 403) {
        //         signOut(auth);
        //         navigate('/login')
        //     }
        // }

    }, [user])

    // console.log(orderData)
    return (
        <div className='mt-5 pt-5'>
            <h3>this is order page</h3>
            <h2>Total Order {orderData?.length}</h2>
            {/* <h2>Total Order {(orderData?.length || 0) && orderData?.length}</h2> */}

            <ul>
                {
                    orderData?.map(data => <li className='d-flex' key={data._id}>
                        <p>name : {data?.name}</p>
                        <p className='ms-3'>serviceId : {data?.serviceId}</p>
                        <p className='ms-3 text-danger'>service : {data?.service}</p>
                        <p className='ms-3'>email : {data?.email}</p>
                        <p className='ms-3'>address : {data?.address}</p>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Order;