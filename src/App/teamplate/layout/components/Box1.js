/*eslint-disable */

import React from 'react'

export default function Box1() {
    return (
        <div className="hero-section division" id="hero-1">
                <div className="slider">
                    <ul className="slides">
                        <li id="slide-1" style={{ opacity: 1 }}>
                            <img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Beauty & SPA Center" style={{ backgroundImage: 'url("https://cser.vn/Upload/image/2021/12/01/slide-1_2021-12-01-140508.jpg")' }} />
                            <div className="caption d-flex align-items-center left-align" style={{ opacity: 1 }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <h2>Beauty &amp; SPA Center</h2>
                                                {/* Text */}
                                                <p>Feugiat primis ligula gravida auctor mauri egestas undo augue viverra tortor in iaculis a placerat eugiat ipsum</p>
                                                {/* Button */}
                                                <a href="booking.html" className="btn btn-md btn-color-02 tra-white-hover">Book an Appointment</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End row */}
                                </div>
                                {/* End container */}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
