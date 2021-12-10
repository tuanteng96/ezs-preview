/*eslint-disable */

import React from 'react'

export default function Box3() {
    return (
        <section id="about-4" className="bg-color-02 wide-100 about-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Transparent Header */}
                                <h2 className="tra-header txt-color-02">Welcome To</h2>
                                {/* Title 	*/}
                                <h3 className="h3-xl txt-color-01">Massage Therapy Center</h3>
                                {/* Text */}
                                <p className="p-lg txt-color-05">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius at magna tempor
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ABOUT BOX #1 */}
                    <div className="row d-flex align-items-center bg-color-05">
                        {/* Image */}
                        <div className="col-lg-6 a4-img">
                            <div className="img-block">
                                <img className="img-fluid" src="https://cser.vn/Preview/images/image-06.jpg" alt="about-image" />
                            </div>
                        </div>
                        {/* Text */}
                        <div className="col-lg-6">
                            <div id="a4-1" className="abox-2">
                                {/* Title */}
                                <h4 className="h4-sm txt-color-01">Skincare and Face Masks</h4>
                                {/* List */}
                                <ul className="txt-list txt-color-01">
                                    <li className="list-item">
                                        <i className="fas fa-genderless" />
                                        <p>Fringilla risus nec, luctus mauris an auctor purus blandit</p>
                                    </li>
                                    <li className="list-item">
                                        <i className="fas fa-genderless" />
                                        <p>An enim nullam tempor sapien gravida donec ipsum and blandit an egestas porta justo integer
                                            odio vitae auctor
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <i className="fas fa-genderless" />
                                        <p>Magna at pretium purus pretium and ligula rutrum laoreet augue in cubilia laoreet an augue egestas
                                            ipsum vitae
                                        </p>
                                    </li>
                                </ul>	{/* End Text List */}
                                {/* Button */}
                                <a href="#" className="btn btn-md btn-color-02 tra-01-hover mt-20">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* ABOUT BOXES WRAPPER */}
                    <div className="abox-2-wrapper">
                        <div className="row d-flex align-items-center">
                            {/* ABOUT BOX #2 */}
                            <div className="col-lg-6 bg-color-03 white-color">
                                <div className="row d-flex align-items-center">
                                    {/* Image */}
                                    <div className="col-md-5 col-lg-6 a4-img">
                                        <div className="img-block">
                                            <img className="img-fluid" src="https://cser.vn/Preview/images/image-07.jpg" alt="about-image" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="col-md-7 col-lg-6">
                                        <div id="a4-2" className="abox-2">
                                            <h5 className="h5-md">SPA Facials</h5>
                                            <p>Magnis nulla dolor a suscipit augue iaculis purus tempor at magna ipsum and primis vitae
                                                purus ipsum a congue magna dictum diam pulvinar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ABOUT BOX #3 */}
                            <div className="col-lg-6 bg-color-04 white-color">
                                <div className="row d-flex align-items-center">
                                    {/* Image */}
                                    <div className="col-md-5 col-lg-6 a4-img">
                                        <div className="img-block">
                                            <img className="img-fluid" src="https://cser.vn/Preview/images/image-08.jpg" alt="about-image" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="col-md-7 col-lg-6">
                                        <div id="a4-3" className="abox-2">
                                            <h5 className="h5-md">Aromatherapy</h5>
                                            <p>Magnis nulla dolor a suscipit augue iaculis purus tempor at magna ipsum and primis vitae
                                                purus ipsum a congue magna dictum diam pulvinar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END ABOUT BOXES WRAPPER */}
                </div>	   {/* End container */}
            </section>
    )
}
