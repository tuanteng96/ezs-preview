/*eslint-disable */

import React from 'react'

export default function Box1() {
    return (
        <section id="about-1" className="bg-color-01 wide-60 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* IMAGE BLOCK */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block left-column pc-10 mb-40">
                            <img className="img-fluid" src="https://cser.vn/Preview/images/image-01.png" alt="about-image" />
                        </div>
                    </div>
                    {/* TEXT BLOCK */}
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block right-column pc-15 mb-40">
                            {/* Title */}
                            <h3 className="h3-md txt-color-01">Your Beauty and Success Starts Here</h3>
                            {/* Text */}
                            <p className="txt-color-05">Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus
                                feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer metus
                                mollis faucibus
                            </p>
                            {/* List */}
                            <ul className="txt-list txt-color-05">
                                <li className="list-item">
                                    <i className="fas fa-genderless" />
                                    <p>Fringilla risus nec, luctus mauris  orci auctor purus euismod at pretium purus
                                        pretium ligula rutrum tempor sapien
                                    </p>
                                </li>
                                <li className="list-item">
                                    <i className="fas fa-genderless" />
                                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien
                                        undo pretium purus
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>	{/* END TEXT BLOCK */}
                </div>	   {/* End row */}
            </div>	   {/* End container */}
        </section>
    )
}
