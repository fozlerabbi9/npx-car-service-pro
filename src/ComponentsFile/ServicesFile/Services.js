import SingleService from './SingleService';
import './Services.css';
import useDataFun from '../DataLoadedFile/LoadData';

const Services = () => {
    const [servises] = useDataFun();

    return (
        <div>

            <div className='servises-style'>
                {
                    servises.map(service => <SingleService
                        service={service}
                        key={service.id}
                    ></SingleService>)
                }
            </div>

            <h2 className='mt-5 pt-5' id='coolCompo'>Cool Component Use Href=# and scroll smothely</h2>

        </div>
    );
};

export default Services;