import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SosialLogin from '../SosialLoginFile/SosialLogin';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errorr, setError] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const naviget = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        naviget(from, { replace: true })
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
                        error ? <p style={{ color: "red" }}>{error.message}</p> : ""
                    }
                    <p>if u are not Register... Plz go to <Link to="/register">Register...</Link></p>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <SosialLogin></SosialLogin>
            </div>
        </div>
    );
};

export default Login;