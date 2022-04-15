import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SosialLogin from '../SosialLoginFile/SosialLogin';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confarmPassword, setConfarmPassWord] = useState("");
    const [checkledValue, setCheckedValue] = useState('');
    const [aggary , setAggry] = useState(false);
    const [error, setError] = useState("");
    // console.log(error);

    const [createUserWithEmailAndPassword, userLog] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate(auth);
    // console.log(user?.displayName);

    if(userLog || user){
        navigate("/")
    }

    const getNameFun = (e) => {
        setName(e.target.value)
    }

    const getEmailFun = (e) => {
        setEmail(e.target.value)
    }

    const getPassFun = (e) => {
        setPassword(e.target.value)
    }

    const getConfarmPassFun = (e) => {
        setConfarmPassWord(e.target.value)
    }
    const checkedFun = (e) => {
        if (e.target.checked) {
            setCheckedValue(e.target.value);
            setAggry(true);
        }
        else{
            setAggry(!true);
        }
    }

    const submitFun = (e) => {
        e.preventDefault();
        if (password !== confarmPassword) {
            setError("Password Not Macth...Please try again");
            return;
        }
        else if (password.length < 6) {
            setError("You Have to minimum 6 carecter");
            return;
        }
        else {
            if (!checkledValue) {
                setError("First you agray with us");
                return;
            }
            else {
                createUserWithEmailAndPassword(email, password);
                setError("You registerd SuccessFully...Now You Can Login");
            }
        }
        // console.log(email, password, confarmPassword);
    }

    const signInFun = (e) => {
        e.preventDefault();
        signInWithGoogle(email, password);
    }


    return (
        <div>
            <h4>Please register here</h4>

            <div className='form-style mx-3'>
                <Form onSubmit={submitFun}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={getNameFun} type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                            Enter your name
                        </Form.Text>
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confarm Password</Form.Label>
                        <Form.Control onBlur={getConfarmPassFun} type="password" placeholder="Confarm Password" />
                    </Form.Group>
                    <p>If u r already registerd go there... <Link to="/login">Login</Link> </p>

                    {
                        error ? <p style={{ color: "red" }}>{error}</p> : ""
                    }

                    {/* <button onClick={signInFun}>Google Sign-in</button><br /> */}
                    <input onClick={checkedFun} className="me-2" type="checkbox" name="terms" id="terms" />
                    <label className={aggary ? "text-success" : "text-danger"} htmlFor="terms">Accept Genious Car Terms And Conditions</label>
                    {/* <label className={checkledValue ? "text-dander" : "text-success"} className='ms-2'>Accept Genious Car Terms And Conditions</label> */}

                    <p></p>

                    <Button disabled={!aggary} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <SosialLogin></SosialLogin>
            </div>
        </div>
    );
};

export default Register;