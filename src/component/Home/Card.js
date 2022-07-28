import React from 'react';
import picture1 from '../../assests/Rectangle 5.png';
import picture2 from '../../assests/Rectangle 5 (1).png';
import picture3 from '../../assests/Rectangle 5 (2).png';
import image1 from '../../assests/Rectangle 3 (2).png';
import image2 from '../../assests/Rectangle 3 (1).png';
import image3 from '../../assests/Rectangle 3.png';
import { GoLocation } from 'react-icons/go';
import { MdModeEditOutline } from 'react-icons/md';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { AiTwotoneCalendar } from 'react-icons/ai';

const Card = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-7'>
                    <div className='card'>
                        <img src={picture1} className='card-img-top' alt='' />
                        <p className='m-3 fw-bold'>✍️ Article</p>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='card-title fs-4'>What if famous brands had regular fonts? Meet RegulaBrands!</h6>
                                <div class="dropdown">
                                    <button class="btn fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Edit</a></li>
                                        <li><a class="dropdown-item" href="/">Report</a></li>
                                        <li><a class="dropdown-item" href="/">option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className='card-text mt-2'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center mt-4 gap-2'>
                                    <img className='mr-2 mb-2' src={image1} alt='' />
                                    <p>Sarthak Kamra</p>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <AiOutlineEye className='me-2' />
                                    <p className='mt-3 me-5'>1.4k views</p>
                                    <button className='btn bg-light'><BsShareFill /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 ms-4 p-4'>
                    <div className='d-flex justify-content-between border-bottom'>
                        <p><GoLocation /> Noida, India</p>
                        <MdModeEditOutline />
                    </div>
                    <div className='mt-5 d-flex'>
                        <BiErrorCircle className='fs-2' />
                        <p className='ms-2'>Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-7'>
                    <div className='card'>
                        <img src={picture2} className='card-img-top' alt='' />
                        <p className='m-3 fw-bold'>🔬️ Education</p>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='card-title fs-4'>Tax Benefits for Investment under National Pension Scheme launched by Government</h6>
                                <div class="dropdown">
                                    <button class="btn fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Edit</a></li>
                                        <li><a class="dropdown-item" href="/">Report</a></li>
                                        <li><a class="dropdown-item" href="/">option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className='card-text mt-2'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center mt-4 gap-2'>
                                    <img className='mr-2 mb-2' src={image2} alt='' />
                                    <p>Sarthak Kamra</p>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <AiOutlineEye className='me-2' />
                                    <p className='mt-3 me-5'>1.4k views</p>
                                    <button className='btn bg-light'><BsShareFill /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-7'>
                    <div className='card'>
                        <img src={picture3} className='card-img-top' alt='' />
                        <p className='m-3 fw-bold'>🗓️ Meetup</p>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='card-title fs-4'>Finance & Investment Elite Social Mixer @Lujiazui</h6>
                                <div class="dropdown">
                                    <button class="btn fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Edit</a></li>
                                        <li><a class="dropdown-item" href="/">Report</a></li>
                                        <li><a class="dropdown-item" href="/">option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center'>
                                    <AiTwotoneCalendar />
                                    <p className='mt-3 ms-2'>Fri, 12 Oct, 2018</p>
                                </div>
                                <div className='d-flex align-items-center ms-5'>
                                    <GoLocation />
                                    <p className='mt-3 ms-2'>Ahmedabad, India</p>
                                </div>
                            </div>
                            <button className='p-2 w-100 border-light rounded-pill text-danger'>Visit Website</button>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center mt-4 gap-2'>
                                    <img className='mr-2 mb-2' src={image3} alt='' />
                                    <p>Sarthak Kamra</p>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <AiOutlineEye className='me-2' />
                                    <p className='mt-3 me-5'>1.4k views</p>
                                    <button className='btn bg-light'><BsShareFill /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;