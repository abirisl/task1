/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import './CardHeading.css';

const CardHeading = () => {
    return (
        <div className='container mt-3 pb-3'>
            <div className='row py-3'>
                <div className='d-flex border-bottom'>
                    <div className='col-md-8 col-sm-none d-flex gap-3 blog-link'>
                        <a href='#'>All Posts(32)</a>
                        <a href='#'>Article</a>
                        <a href='#'>Event</a>
                        <a href='#'>Education</a>
                    </div>

                    <div className='col-md-4'>
                        <div className='d-flex gap-3 ms-5 '>
                            <button class="rounded dropdown-toggle border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Write a Post
                            </button>
                            <button className='btn btn-primary rounded text-white border-0'><AiOutlineUsergroupAdd /> Join Group</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHeading;