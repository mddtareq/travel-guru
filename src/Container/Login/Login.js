import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import facebook from "../../Icon/fb.png";
import google from "../../Icon/google.png";
import './Login.css';
import { facebookSignIn, googleSignIn, initializeLoginFramework, signOutAll,signInUserWithEmailAndPassword,createUserWithEmailAndPassword} from './logInManager';
const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
    });
    initializeLoginFramework();
    const[logged,setLogged]=useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [input, setInput] = useState({ });
    const register = () => {
        setNewUser(true);
    }
    const login = () => {
        setNewUser(false);
    }
    const facebookLogin = () => {
        facebookSignIn()
            .then(response => {
                logResponse(response,true);
            })
    }
    const googleLogin = () => {
        googleSignIn()
            .then(response => {
                logResponse(response,true);
            })
    }
    const logResponse = (response,redirect) => {
        setUser(response);
        setLogged(response);
        if(redirect){
            history.replace(from);
        }
    }
    const submit = (event) => {
        if (newUser && user.email && user.password) {
            user.name=`${user.fName} ${user.lName}`;
            createUserWithEmailAndPassword(user.name,user.email, user.password)
            .then(response => {
                logResponse(response,true);
            })
        }
        if (!newUser && user.email && user.password) {
            signInUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                logResponse(response,true);
            })
        }
        event.preventDefault();
    }
    const [password, setPassword] = useState('')
    const validate = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'fName') {
            isFieldValid = /^([A-Za-z]{3,30})$/.test(event.target.value);
            if(isFieldValid){
                input.fName=false;
            }
            else{
                input.fName=true;
            }
        }
        if (event.target.name === 'lName') {
            isFieldValid = /^([A-Za-z]{3,30})$/.test(event.target.value);
            if(isFieldValid){
                input.lName=false;
            }
            else{
                input.lName=true;
            }
        }
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
            if(isFieldValid){
                input.email=false;
            }
            else{
                input.email=true;
            }
        }
        if (event.target.name === 'password') {
            isFieldValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(event.target.value);
            if(isFieldValid){
                input.password=false;
            }
            else{
                input.password=true;
            }
        }
        if (event.target.name === 'confirmPassword') {
             isFieldValid =(event.target.value === password);
             if(isFieldValid){
                input.confirmPassword=false;
            }
            else{
                input.confirmPassword=true;
            }
        }
        if (isFieldValid) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        } else {
            const newUser = { ...user };
            newUser[event.target.name] = '';
            setUser(newUser);
        }
    }
    const signOut = () => {
        signOutAll()
            .then(response => {
                logResponse(response,false);
            })
    }
    return (
        <div>
            {!logged.isSignIn ?
            <div className="row">
                <div className="col-md-3 col-sm-1 col-1 col-lg-3"></div>
                <div className="col-md-6 col-sm-8 col-10 col-sm-10 col-lg-6 log">
                    <div className="InUp">
                        {newUser ? <h5 className="head">Create an account</h5> :
                            <h5 className="head">Sign In</h5>}
                        <form onSubmit={submit}>
                            {newUser && <input onBlur={validate} type="text" placeholder="First Name" name="fName" id="" required/>}
                            {newUser && input.fName && <p className="warning">Must contain only letters and between 3 and 30</p>}
                            {newUser && <input onBlur={validate} type="text" placeholder="Last Name" name="lName" id="" required/>}
                            {newUser && input.lName && <p className="warning">Must contain only letters and between 3 and 30</p>}
                            <input type="email" onBlur={validate} placeholder="Email" name="email" id="" required/>
                            {newUser && input.email && <p className="warning">Enter a valid email</p>}
                            <input type="password" onChange={event => setPassword(event.target.value)} onBlur={validate} placeholder="Password" name="password" id="" required/>
                            {newUser && input.password && <p className="warning">Password Must contain 8 character, a uppercase and letter</p>}
                            {newUser && <input onBlur={validate} type="password" placeholder="Confirm Password" name="confirmPassword" id="" required/>}
                            {newUser && input.confirmPassword && <p className="warning">Password Mismatch</p>}
                           
                            {newUser ? <input  type="submit" className="btn-create" value="Create an account"/> :
                                <input type="submit" className="btn-create" value="Sign In"/>}
                        </form>
                        <p className="warning" style={{ color: 'red' }}>{user.error}</p>
                        {newUser ? <p>Already have an account ? <button onClick={login} className="toggle">Login</button> </p> :
                            <p>Don't have an account ? <button onClick={register} className="toggle">Register here!</button> </p>}
                            

                    </div>
                    <div className="line d-flex">
                        <hr />
                        <p>Or</p><hr />
                    </div>
                    <div className="social-btn">
                        <button onClick={facebookLogin} >
                            <div className="facebook d-flex justify-content-between align-items-center">
                                <img src={facebook} alt="Facebook" />
                                <p>Continue With Facebook</p><p></p>
                            </div>
                        </button>
                    </div>
                    <div className="social-btn">
                        <button onClick={googleLogin}>
                            <div className="google d-flex justify-content-between align-items-center">
                                <img src={google} alt="Google" />
                                <p>Continue With Google</p><p></p>
                            </div>
                        </button>
                    </div>

                </div>
                <div className="col-md-3 col-sm-1 col-1 col-lg-3"></div>
            </div>
                :
                <div className="row">
                    <div className="col-md-3 col-sm-1 col-1 col-lg-3"></div>
                    <div className="col-md-6 col-sm-8 col-10 col-sm-10 col-lg-6">
                        <img src={user.image} alt="" />
                        <Card>
                            <Card.Header>{logged.email}</Card.Header>
                            <Card.Body>
                                <Card.Title className="card-text">{logged.name}</Card.Title>
                                <Card.Img src={logged.photo} alt={logged.name} />
                                <Card.Text>
                                    
                                </Card.Text>
                                <button className="btn-create" onClick={signOut}> Sign Out </button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 col-sm-1 col-1 col-lg-3"></div>
                </div>
            }
        </div>
    );
};

export default Login;