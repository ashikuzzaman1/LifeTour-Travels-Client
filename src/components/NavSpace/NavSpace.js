import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import navIcon from '../../images/logo1.PNG'
import './NavSpace.css'
const NavSpace = () => {
    const { users, logOut } = useAuth();
    return (
        <>
            <Navbar className='px-5 bg-nav' expand="lg" sticky="top" variant="dark">
                <Navbar.Brand href="/">
                    <img className='img-fluid logo-img' src={navIcon} alt="" />
                </Navbar.Brand>
                <Link className='fw-bold text-decoration-none home-color text-light' to="/">LiFE-TOUR-TRAVELS</Link>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-warning' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">
                            <NavLink className='text-light text-decoration-none' to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/addService">
                            <NavLink className='text-light text-decoration-none' to="/addService">AddService</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <NavLink className='text-light text-decoration-none' to="/about">About Us</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <NavLink className='text-light text-decoration-none' to="/contact">Contact</NavLink>
                        </Nav.Link>
                        {users.email ?
                            <Nav.Link>
                                <a className='text-dark text-decoration-none' onClick={logOut} href="/login">Log Out</a>
                            </Nav.Link>
                            :
                            <Nav.Link href="/login">
                                <NavLink className='text-light text-decoration-none' to="/login">Login</NavLink>
                            </Nav.Link>
                        }
                        {
                            users?.email &&
                            <Nav.Link>
                                <span className='user-name'>{users.displayName}</span>
                            </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};

export default NavSpace;