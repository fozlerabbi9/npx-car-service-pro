import React from 'react';
import { Link } from 'react-router-dom';
import useDataFun from '../DataLoadedFile/LoadData';
import Banner from './BannerFile/Banner';
import './Home.css';
import ShowData from './ShowData';

const Home = () => {
    const [services] = useDataFun();
    return (
        <div>
            {/* <h3>This is home page</h3> */}
            <Banner></Banner>

            <div className='servises-style'>
                {
                    services.slice(0, 3).map(service => <ShowData
                        service={service}
                        key={service.id}
                    ></ShowData>)
                }
            </div>

            <Link to="/aboutUs">Show More</Link>

        </div>
    );
};

export default Home;