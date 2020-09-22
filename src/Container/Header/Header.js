import React, { useContext } from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../Icon/icon.png";
import { UserContext } from '../../App';

const Header = () => {
    const [logged, setLogged] = useContext(UserContext);
    return (
        <Navbar className="custom-nav" expand="lg">
            <Link to="/">
                <img src={logo} alt="Travel Guru" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="font-color-white" inline>
                    <input type="text" placeholder="Search your destination" className="mr-sm-2" />
                </Form>
                <Nav className="style">
                    <Link to="/">Home</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    {logged.isSignIn && <Link to="/bookings">Booking Details</Link>}
                    {logged.isSignIn?<Link to="/login">{logged.name}</Link>:
                    <Link className="btn-nav" to="/login"><p className="font-color-black">Login</p></Link>}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;