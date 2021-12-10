/*eslint-disable */

import React, { useState, useEffect } from 'react'

export default function Header() {

    const [scroll, setScroll] = useState(false);

    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 80);
        })
    }, [])

    return (
        <header id="header" className="header tra-menu navbar-light">
            <div className="header-wrapper">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <span className="smllogo">
                        <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" alt="Cser Beauty" width={170} height={50} />
                        <div className="icon-smmenu">
                            <i className="fal fa-times close-list-user" />
                            <div className="header-btn header-phone icon-user-mb">
                                <a className="circle-btn" href="/member/login.aspx"><span className="bg-color-09 white-color"><i className="far fa-user" /></span></a>
                            </div>
                            <div className="header-btn header-cart">
                                <a className="circle-btn" href="/dat-hang/san-pham.aspx">
                                    <span className="bg-color-09 white-color">
                                        <i className="fal fa-shopping-cart" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
                    </span></div>
                {/* NAVIGATION MENU */}
                <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
                    <div className="wsmainwp clearfix">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 340 x 100 pixels) */}
                        <div className="desktoplogo">
                            <a href="/" className="logo-black">
                                <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" alt="Cser Beauty" width={170} height={50} />
                            </a>
                        </div>
                        <div className="desktoplogo">
                            <a href="/" className="logo-white">
                                <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-153000.png" alt="" width={170} height={50} />
                            </a>
                        </div>
                        {/* MAIN MENU */}
                        <nav className={`wsmenu clearfix`}><div className="overlapblackbg" />
                            <ul className="wsmenu-list">
                                <li><a href="/">Trang chủ</a>
                                </li>
                                <li><a href="/gioi-thieu.aspx">Giới thiệu</a>
                                </li>
                                {/* END DROPDOWN MENU */}
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow" /></span><a href="/san-pham/san-pham-794.aspx">Sản phẩm<span className="wsarrow" /></a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true"><a href="/san-pham/cham-soc-da-mat-8977.aspx">Chăm sóc da mặt</a></li>
                                        <li aria-haspopup="true"><a href="/san-pham/son-10007.aspx">Son</a></li>
                                        <li aria-haspopup="true"><a href="/san-pham/thuc-pham-chuc-nang-10011.aspx">Thực phẩm chức năng</a></li>
                                        <li aria-haspopup="true"><a href="/san-pham/cham-soc-body-8978.aspx">Chăm sóc Body</a></li>
                                    </ul>
                                </li>
                                {/* END DROPDOWN MENU */}
                                {/* MEGAMENU */}
                                <li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow" /></span><a href="/dv/san-pham/dich-vu-795.aspx">Dịch vụ <span className="wsarrow" /></a>
                                    <ul className="sub-menu">
                                        <li><a href="/dv/san-pham/triet-long-8980.aspx">Triệt lông</a></li>
                                        <li><a href="/dv/san-pham/tam-trang-8981.aspx">Tắm trắng</a></li>
                                        <li><a href="/dv/san-pham/goi-dau-duong-sinh-8986.aspx">Gội đầu dưỡng sinh</a></li>
                                        <li><a href="/dv/san-pham/cham-soc-da-8979.aspx">Chăm sóc da</a></li>
                                    </ul>
                                </li>
                                {/* END MEGAMENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                <li>
                                    <a href="/tin-tuc-su-kien-693.aspx">Blogs</a>
                                </li>
                                <li><a href="/lien-he.aspx">Liên hệ</a></li>
                                {/* DROPDOWN MENU */}
                                {/* END DROPDOWN MENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                {/* HEADER CALL BUTTON */}
                                <li className="header-btn header-phone  icon-user-desktop">
                                    <a className="circle-btn" href="/member/login.aspx "><span className="bg-color-09 white-color"><i className="far fa-user" /></span></a>
                                </li>
                                <li className="header-phone header-cart" style={{ display: 'none' }}>
                                    <a href="/dat-hang/san-pham.aspx">
                                        <span className="bg-color-09 white-color">
                                            <i className="fal fa-shopping-cart" />
                                        </span>
                                        <p className="header-cart__item txt-color-06">12</p>
                                    </a>
                                </li>
                                {/* HEADER BUTTON 
								    <li class="nl-simple" aria-haspopup="true">
								    	<a href="#" class="btn btn-color-02 tra-01-hover last-link">Book Now</a>
								    </li> */}
                                {/* HEADER SOCIAL LINKS 															
									<li class="nl-simple txt-color-03 header-socials clearfix" aria-haspopup="true">
										<span><a href="#" class="ico-facebook"><i class="fab fa-facebook-f"></i></a></span>
										<span><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></span>
										<span><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></span>
										<span><a href="#" class="ico-dribbble"><i class="fab fa-yelp"></i></a></span>	
									</li> */}
                            </ul>
                        </nav>
                        {/* END MAIN MENU */}
                    </div>
                </div>
                {/* END NAVIGATION MENU */}
            </div>
            {/* End header-wrapper */}
        </header>
    )
}
