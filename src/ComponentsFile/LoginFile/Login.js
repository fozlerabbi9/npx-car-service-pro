import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SosialLogin from '../SosialLoginFile/SosialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import Loading from '../SharedPage/LoadingFile/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorr, setError] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, senderror] = useSendPasswordResetEmail(auth);
    const naviget = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        naviget(from, { replace: true })
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    const getEmailFun = (e) => {
        setEmail(e.target.value)
    }

    const getPassFun = (e) => {
        setPassword(e.target.value)
    }

    const loginFun = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    const resetPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            toast("Please Enter a valid email")            
        }
        else{
            await sendPasswordResetEmail(email);
            toast("chack your email")            
        }

        // setError("chack your email")
    }
    // if(error){
    //     setError(error)
    // }

    // const googleLoginButton = (e) => {
    //     e.preventDefault();
    //     console.log( email, password);
    // }

    return (
        <div>
            <h3>please login here</h3>


            <div className='form-style mx-3'>
                <Form onSubmit={loginFun}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmailFun} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPassFun} type="password" placeholder="Password" />
                    </Form.Group>

                    {
                        loading ? <p style={{ color: "Green" }}>loading...</p> : ""
                    }

                    {
                        error || errorr ? <p style={{ color: "red" }}>{error?.message} {errorr}</p> : ""
                    }
                    <p>if u are not Register... Plz go to <Link to="/register">Register...</Link></p>

                    <button className='btn btn-link' onClick={resetPassword}>Forget Password</button>

                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <SosialLogin></SosialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;