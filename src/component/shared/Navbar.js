import React from 'react';
import logo from '../../assests/whole.png';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav class="navbar px-3 navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src={logo} alt=''/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <div class="navbar-nav mx-auto mb-2 mb-lg-0">
                   <form>
                        <input class="form-control me-2 rounded-pill" style={{width: "360px", backgroundColor: '#F2F2F2'}} type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
                    </form>
                   </div>
                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Create account. <span className='text-primary'>It’s free!</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;