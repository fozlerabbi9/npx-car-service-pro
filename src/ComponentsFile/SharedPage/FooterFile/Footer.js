import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const displayDate = date.getDay() +"/" + date.getMonth() + "/" + date.getFullYear();
    return (
        <div className='my-5'>
            <footer>
                <small> CopyRight Date {displayDate} </small>
            </footer>
        </div>
    );
};

export default Footer;