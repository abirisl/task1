import React from 'react';

const CardHeading = () => {
    return (
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col-md-8 d-flex gap-3'>
                    <p className='border-2 border-bottom border-dark'>All Posts(32)</p>
                    <p>Article</p>
                    <p>Event</p>
                    <p>Education</p>

                </div>
                <div className='col-md-4'>
                    <div className='d-flex gap-3 ms-5 '>
                        <button class="rounded dropdown-toggle border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Write a Post
                        </button>
                        <button className='join-button rounded text-white border-0'>Join Group</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default CardHeading;