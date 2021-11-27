import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './Details.css'

const Details = () => {
    const { detailsId } = useParams();
    const [services] = useServices([]);
    const [details, setDetails] = useState({});
    const intDetailsId = parseInt(detailsId);
    useEffect(() => {
        const matchDetails = services.find(service => service.key === intDetailsId)
        setDetails(matchDetails)
    }, [services, intDetailsId])
    return (
        <div className='details-bg'>

            <Row>
                <Col xs={12} md={6}>
                    <img className='img-fluid details-img' src={details?.img} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <h3 className='my-5'>Place Name : {details?.name}</h3>
                    <p><b>Package Details :</b> {details?.info}</p>
                    <p><b>Hotel Info :</b> {details?.hotel}</p>
                    <p><b>Person :</b> {details?.person}</p>
                    <p><b>TotalCost :</b> {details?.totalcost}</p>
                    <button className="btn btn-success">Booking Now</button>
                </Col>
            </Row>
        </div>
    );
};

export default Details;