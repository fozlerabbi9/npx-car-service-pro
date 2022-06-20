import React from 'react';
import './SosialLogin.css';
import logo1 from '../../images/logo/googlelogo.jpg'
import facebooklogo from '../../images/logo/facebook.png'
import githublogo from '../../images/logo/github.jpg'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../HooksFile/useToken';


const SosialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const [token] = useToken(user || gituser);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    let errorElement;
    if (error || giterror) {
        errorElement = <p className='text-danger'>Error: {error?.message} {giterror?.message}</p>

    }
    if (token) {
        navigate(from, { replace: true })
    }
    // if (user || gituser) {
    //     // navigate('/')
    //     navigate(from, { replace: true })
    // }
    // if(gituser){
    //     navigate('/')
    // }

    return (
        <div>
            {/* {
                error && <p className='text-danger'>Error: {error.message}</p>
            } */}
            {
                loading && <p className='text-success'>Loading...</p>
            }
            {
                gitloading && <p className='text-success'>Loading...</p>
            }
            {errorElement}
            <div className='or-style'>
                <div className='border'></div>
                <p className='p'>or</p>
                <div className='border'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className=' button'>
                <img src={logo1} alt="" />
            </button>
            <button className=' button my-2'>
                <img src={facebooklogo} alt="" />
            </button>
            <button onClick={() => signInWithGithub()} className=' button'>
                <img src={githublogo} alt="" />
            </button>
        </div>
    );
};

export default SosialLogin;