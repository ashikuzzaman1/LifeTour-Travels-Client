import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    // const [services] = useServices()

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gory-blood-03228.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='w-100 my-4 p-5'>
            <h1 className='text-center text-primary pb-3'>Best Tourist Place</h1>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </div>





        </div>
    );
};

export default Services;