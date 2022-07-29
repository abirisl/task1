import React from 'react';
import logo from '../../assests/whole.png';
import { AiOutlineSearch } from 'react-icons/ai';
import image1 from '../../assests/Group 3.png';
import google from '../../assests/google.png';
import facebook from '../../assests/facebook.png';
import './Modal.css';


const Navbar = () => {
    return (
        <nav class="navbar px-3 navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src={logo} alt='' /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <form>
                            <span></span>
                            <input class="form-control me-2 rounded-pill" style={{ width: "360px", backgroundColor: '#F2F2F2' }} type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
                        </form>
                    </div>
                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" data-bs-toggle='modal' data-bs-target="#myModal" role="button" aria-expanded="false">
                                Create account. <span className='text-primary'>It’s free!</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='modal px-5' id='myModal' >
                    <div className='modalCSS modal-dialog-centered'>
                        <div className='modal-content'>
                            
                            <div className='py-3' style={{ backgroundColor: '#EFFFF4', color: '#008A45' }}>
                                <h5 className='small d-flex justify-content-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                                <button type='button' className='closeBtn rounded-circle btn fw-bold' data-bs-dismiss='modal'>X</button>
                            </div>
                            <div className='modal-body'>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <h3>Create account</h3>
                                            <div className="input-group">
                                                <input type="text" placeholder='First Name' aria-label="First name" className="form-control" />
                                                <input type="text" aria-label="Last name" placeholder='Last Name' className="form-control" />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="email" aria-label="Email" placeholder='Email' className="form-control" />
                                                <input type="password" aria-label="password" placeholder='Password' className="form-control" />
                                                <input type="password" aria-label="confirmPassword" placeholder='Confirm Password' className="form-control" />
                                            </div>
                                            <div>
                                                <button className='mb-2 btn btn-primary rounded-pill modal-btn w-100'>Create account</button>
                                                <button className='mb-2 btn bg-none border rounded modal-btn w-100'> <img className='fb' src={facebook} alt="" /> Sign-up with Facebook</button>
                                                <button className='mb-2 btn bg-none border rounded modal-btn w-100'> <img className='me-2' width={14} src={google} alt="" /> Sign-up with google</button>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <h5 className='small text-end'>Already have an account? <a href="/">Sign in</a></h5>
                                            <img src={image1} alt='' />
                                            <small style={{ fontSize: '12px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;