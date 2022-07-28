import React from 'react';
import picture1 from '../../assests/Rectangle 5.png';
import picture2 from '../../assests/Rectangle 5 (1).png';
import picture3 from '../../assests/Rectangle 5 (2).png';
import image1 from '../../assests/Rectangle 3 (2).png';
import image2 from '../../assests/Rectangle 3 (1).png';
import image3 from '../../assests/Rectangle 3.png';

const Card = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <img src={picture1} className='card-img-top' alt='' />
                        <p className='m-3 fw-bold'>✍️ Article</p>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h4 className='card-title'>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                                <div class="dropdown">
                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Edit</a></li>
                                        <li><a class="dropdown-item" href="/">Report</a></li>
                                        <li><a class="dropdown-item" href="/">option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className='card-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center mt-4 gap-2'>
                                <img className='mr-2 mb-2' src={image1} alt='' />
                                <p>Sarthak Kamra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className='card'>
                        <img src={picture2} className='card-img-top' alt='' />
                        <p className='m-3 fw-bold'>🔬️ Education</p>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h4 className='card-title'>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                                <div class="dropdown">
                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Edit</a></li>
                                        <li><a class="dropdown-item" href="/">Report</a></li>
                                        <li><a class="dropdown-item" href="/">option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className='card-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center mt-4 gap-2'>
                                <img className='mr-2 mb-2' src={image2} alt='' />
                                <p>Sarthak Kamra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className='card'>
                        <img src={picture3} className='card-img-top' alt='' />
                        <p className='m-3 fw-bold'>🗓️ Meetup</p>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h4 className='card-title'>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                                <div class="dropdown">
                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Edit</a></li>
                                        <li><a class="dropdown-item" href="/">Report</a></li>
                                        <li><a class="dropdown-item" href="/">option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className='card-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center mt-4 gap-2'>
                                <img className='mr-2 mb-2' src={image3} alt='' />
                                <p>Sarthak Kamra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;