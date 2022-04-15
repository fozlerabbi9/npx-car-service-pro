import React from 'react';
import './SosialLogin.css';
import logo1 from '../../images/logo/googlelogo.jpg'
import facebooklogo from '../../images/logo/facebook.png'
import githublogo from '../../images/logo/github.jpg'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SosialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || giterror) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {giterror?.message}</p>
        </div>

    }
    if (user || gituser) {
        navigate('/')
    }
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
            <button onClick={()=>signInWithGithub()} className=' button'>
                <img src={githublogo} alt="" />
            </button>
        </div>
    );
};

export default SosialLogin;