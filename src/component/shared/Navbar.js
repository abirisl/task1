import React from 'react';
import logo from '../../assests/whole.png';
import { AiOutlineSearch } from 'react-icons/ai';

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
                <div className='modal' id='myModal' >
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h4 className='modal-title p-5'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼t</h4>
                                <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
                            </div>
                            <div className='modal-body'>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="First Name" aria-label="Username" />

                                    <input type="text" class="form-control" placeholder="Last Name" aria-label="Server" />
                                </div>
                                <input type="text" class="form-control" placeholder="Email" aria-label="Server" /><br />
                                <input type="text" class="form-control" placeholder="Password" aria-label="Server" />
                                <br />
                                <input type="text" class="form-control" placeholder="Confirm Password" aria-label="Server" />
                            </div>
                            <div className='m-3'>
                                <button className='btn btn-primary rounded-pill modal-btn'>Sign-up now</button>
                            </div>
                            <div className='m-1'>
                                <button className='btn bg-none border rounded modal-btn'> <img className='fb' src=".." alt="" /> Sign-up with Facebook</button>
                            </div>
                            <div className='m-1'>
                                <button className='btn bg-none border rounded modal-btn'> <img className='google' src="..." alt="" /> Sign-up with google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;