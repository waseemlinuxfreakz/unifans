'use client';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
 
function SignUpModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" className='login' onClick={handleShow}>Sign up</a>

      <Modal show={show} onHide={handleClose}>
        {/* <span onClick={handleClose}> close </span> */}
        <Modal.Body>
            <div className="modalTitle">
                <h2 className=""><b>Sign-up</b> to your Account</h2>
                <p>Use your email to sign in</p>
            </div>
            <div className="formToggle">
                <div className="tabTitle">Create account as</div>
                <Tabs
                    defaultActiveKey="Fan"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Fan" title="Fan">
                        <div className="loginForm">
                            <form action="#">
                                <div className="inputCol">
                                    <label htmlFor="regUsername">User Name</label>
                                    <div className="inputBox">
                                        <img src="./User.svg" className='labelIcon' alt="Email" />
                                        <input type="email" id='regUsername' name='regUsername' />
                                    </div>
                                </div>
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
                                <div className="signInBtn">
                                    <button type='password'>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </Tab>
                    <Tab eventKey="contentCreator" title="contentCreator">
                        <div className="loginForm">
                            <form action="#">
                                <div className="inputCol">
                                    <label htmlFor="University">University</label>
                                    <div className="inputBox">
                                        <img src="./University.svg" className='labelIcon' alt="Email" />
                                        <select name="University" id="University">
                                            <option value="University">University</option>
                                            <option value="University">University</option>
                                            <option value="University">University</option>
                                            <option value="University">University</option>
                                        </select>
                                        <img src="./Down.svg" className='selectArrow' alt="Email" />
                                    </div>
                                </div>
                                <div className="inputCol">
                                    <label htmlFor="regUsername">User Name</label>
                                    <div className="inputBox">
                                        <img src="./User.svg" className='labelIcon' alt="Email" />
                                        <input type="email" id='regUsername' name='regUsername' />
                                    </div>
                                </div>
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
                                <div className="signInBtn">
                                    <button type='password'>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModal;