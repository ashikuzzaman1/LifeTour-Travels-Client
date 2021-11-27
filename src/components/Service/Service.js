import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { key, name, info, hotel, person, totalcost, img } = props.service || {};
    return (
        <div>
            <Col>
                <Card className='shadow-lg card-area'>
                    <Card.Img className='img-fluid image-height' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><b>Place Name :</b> {name}</Card.Title>
                        <Card.Text>
                        <b>Package Details :</b> {info}
                        </Card.Text>
                        <Card.Text>
                        <b>Hotel Info :</b> {hotel}
                        </Card.Text>
                        <Card.Text>
                        <b>Person :</b> {person}
                        </Card.Text>
                        <Card.Text>
                        <b>TotalCost :</b> {totalcost}
                        </Card.Text>
                        <Link className='text-decoration-none' to={`details/${key}`}>
                            <button className='btn btn-primary button-details'>Details</button>
                        </Link>
                        <Link className='text-decoration-none' to={`details/${key}`}>
                            <button className='btn btn-success'>Booking Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;