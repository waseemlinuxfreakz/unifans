'use client';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
 
function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" className='login' onClick={handleShow}>login</a>

      <Modal show={show} onHide={handleClose}>
        {/* <span onClick={handleClose}> close </span> */}
        <Modal.Body>
            <div className="modalTitle">
                <h2 className=""><b>Sign-in</b> to your Account</h2>
                <p>Use your email to sign in</p>
            </div>
            <div className="loginForm">
                <form action="#">
                    <div className="inputCol">
                        <label htmlFor="logEmail">Email</label>
                        <div className="inputBox">
                            <img src="./Email.svg" className='labelIcon' alt="Email" />
                            <input type="email" id='logEmail' name='logEmail' />
                        </div>
                    </div>
                    <div className="inputCol">
                        <label htmlFor="LogPass">Password</label>
                        <div className="inputBox">
                            <img src='./Password.svg' className='labelIcon' alt="Password" />
                            <input type="password" id='LogPass' name='LogPass' />
                        </div>
                    </div>
                    <div className="remmeFor">
                        <div className="remember">
                            <input type="checkbox" id='rememberPass' name='rememberPass' />
                            <label for="rememberPass">Remember me</label>
                        </div>
                        <a href="#" className='forgotPass'>Forgot password?</a>
                    </div>
                    <div className="signInBtn">
                        <button type='password'>Sign in</button>
                    </div>
                </form>
                <div className="loginOr">
                    <span>Or</span>
                    <ul className="lgoinWitt">
                        <li><a href="#"><img src="./FB.svg" alt="Login With" /></a></li>
                        <li><a href="#"><img src="./googlePlus.svg" alt="Login With" /></a></li>
                        <li><a href="#"><img src="./linkedin.svg" alt="Login With" /></a></li>
                    </ul>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;