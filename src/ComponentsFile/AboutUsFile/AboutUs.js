import Services from '../ServicesFile/Services';
import './AboutUs.css';

const AboutUs = () => {

    return (
        <div >
            <h3 id='aboutUs' className='my-5 pt-4'>This is about us page</h3>

            <Services></Services>
        </div>
    );
};

export default AboutUs;