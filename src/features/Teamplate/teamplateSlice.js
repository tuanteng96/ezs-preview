import {
    createSlice
} from "@reduxjs/toolkit";

const dataHeader = [{
        ID: 1,
        Title: "Header 1",
        Html: `<header id="header" class="header tra-menu navbar-light">
            <div class="header-wrapper">


                <!-- MOBILE HEADER -->
                <div class="wsmobileheader clearfix">
                    <span class="smllogo">
                        
                            <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" alt="Cser Beauty" width="170" height="50">
                            
                        <div class="icon-smmenu">
                            <i class="fal fa-times close-list-user"></i>
                            <div class="header-btn header-phone icon-user-mb">
                                
                                <a class="circle-btn" href="/member/login.aspx"><span class="bg-color-09 white-color"><i class="far fa-user"></i></span></a>
                                
                            </div>
                            <div class="header-btn header-cart" style="display: none;">
                                <a class="circle-btn" href="/dat-hang/san-pham.aspx">
                                    <span class="bg-color-09 white-color">
                                        <i class="fal fa-shopping-cart"></i>
                                    </span>
                                    <p class="header-cart__item txt-color-06">12</p>
                                </a>
                            </div>
                        </div>

                        <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
                </span></div>


                <!-- NAVIGATION MENU -->
                <div class="wsmainfull menu clearfix">
                    <div class="wsmainwp clearfix">


                        <!-- LOGO IMAGE -->
                        <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 340 x 100 pixels) -->
                        <div class="desktoplogo">
                            <a href="/" class="logo-black">
                                
                                    <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" alt="Cser Beauty" width="170" height="50">
                                    
                            </a>
                        </div>
                        <div class="desktoplogo">
                            <a href="/" class="logo-white">
                                
                                    <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-153000.png" alt="" width="170" height="50">
                                    
                            </a>
                        </div>


                        <!-- MAIN MENU -->
                        <nav class="wsmenu clearfix"><div class="overlapblackbg"></div>
                            <ul class="wsmenu-list">

                                <li><a href="/">Trang chủ</a>

                                </li>
                                <li><a href="/gioi-thieu.aspx">Giới thiệu</a>

                                </li>
                                <!-- END DROPDOWN MENU -->


                                <!-- DROPDOWN MENU -->
                                <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="/san-pham/san-pham-794.aspx">Sản phẩm<span class="wsarrow"></span></a>
                                    <ul class="sub-menu">
                                        
                                            <li aria-haspopup="true"><a href="/san-pham/cham-soc-da-mat-8977.aspx">Chăm sóc da mặt</a></li>
                                            
                                            <li aria-haspopup="true"><a href="/san-pham/son-10007.aspx">Son</a></li>
                                            
                                            <li aria-haspopup="true"><a href="/san-pham/thuc-pham-chuc-nang-10011.aspx">Thực phẩm chức năng</a></li>
                                            
                                            <li aria-haspopup="true"><a href="/san-pham/cham-soc-body-8978.aspx">Chăm sóc Body</a></li>
                                            
                                    </ul>
                                </li>
                                <!-- END DROPDOWN MENU -->


                                <!-- MEGAMENU -->
                                <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="/dv/san-pham/dich-vu-795.aspx">Dịch vụ <span class="wsarrow"></span></a>
                                    <ul class="sub-menu">
                                        
                                            <li><a href="/dv/san-pham/triet-long-8980.aspx">Triệt lông</a></li>
                                            
                                            <li><a href="/dv/san-pham/tam-trang-8981.aspx">Tắm trắng</a></li>
                                            
                                            <li><a href="/dv/san-pham/goi-dau-duong-sinh-8986.aspx">Gội đầu dưỡng sinh</a></li>
                                            
                                            <li><a href="/dv/san-pham/cham-soc-da-8979.aspx">Chăm sóc da</a></li>
                                            
                                    </ul>
                                </li>
                                <!-- END MEGAMENU -->


                                <!-- SIMPLE NAVIGATION LINK -->
                                <li>
                                    <a href="/tin-tuc-su-kien-693.aspx">Blogs</a>
                                </li>
                                <li><a href="/lien-he.aspx">Liên hệ</a></li>


                                <!-- DROPDOWN MENU -->
                                
                                <!-- END DROPDOWN MENU -->


                                <!-- SIMPLE NAVIGATION LINK -->
                                


                                <!-- HEADER CALL BUTTON -->
                                
                                <li class="header-btn header-phone  icon-user-desktop">
                                    
                                    <a class="circle-btn" href="/member/login.aspx "><span class="bg-color-09 white-color"><i class="far fa-user"></i></span></a>
                                    
                                </li>
                                <li class="header-phone header-cart" style="display: none;">
                                    <a href="/dat-hang/san-pham.aspx">
                                        <span class="bg-color-09 white-color">
                                            <i class="fal fa-shopping-cart"></i>
                                        </span>
                                        <p class="header-cart__item txt-color-06">12</p>
                                    </a>
                                </li>
                                <!-- HEADER BUTTON 
                                <li class="nl-simple" aria-haspopup="true">
                                    <a href="#" class="btn btn-color-02 tra-01-hover last-link">Book Now</a>
                                </li> -->


                                <!-- HEADER SOCIAL LINKS 															
                                <li class="nl-simple txt-color-03 header-socials clearfix" aria-haspopup="true">
                                    <span><a href="#" class="ico-facebook"><i class="fab fa-facebook-f"></i></a></span>
                                    <span><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></span>
                                    <span><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></span>
                                    <span><a href="#" class="ico-dribbble"><i class="fab fa-yelp"></i></a></span>	
                                </li> -->


                            </ul>
                        </nav>
                        <!-- END MAIN MENU -->

                    </div>
                </div>
                <!-- END NAVIGATION MENU -->


            </div>
            <!-- End header-wrapper -->
        </header>`,
        Thumbnail: "/assets/header/199af096498875.Y3JvcCwxNjE2LDEyNjQsMCww.png"
    },
    {
        ID: 2,
        Title: "Header 2",
        Html: `<header id="header" class="header white-menu navbar-dark">
        <div class="header-wrapper">


            <!-- MOBILE HEADER -->
            <div class="wsmobileheader clearfix">	  	
                <span class="smllogo"><img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" width="170" height="50" alt="mobile-logo"></span>
                <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>	
            </div>


            <!-- NAVIGATION MENU -->
            <div class="wsmainfull menu clearfix">
                <div class="wsmainwp clearfix">


                    <!-- LOGO IMAGE -->
                    <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 340 x 100 pixels) -->
                    <div class="desktoplogo">
                            <a href="/" class="logo-black">
                                
                                    <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" alt="Cser Beauty" width="170" height="50">
                                    
                            </a>
                        </div>
                        <div class="desktoplogo">
                            <a href="/" class="logo-white">
                                
                                    <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-153000.png" alt="" width="170" height="50">
                                    
                            </a>
                        </div>

                    <!-- MAIN MENU -->
                    <nav class="wsmenu clearfix"><div class="overlapblackbg"></div>
                        <ul class="wsmenu-list">


                            <!-- DROPDOWN MENU -->
                            <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="#">Our Spa <span class="wsarrow"></span></a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="#services-17">Why Spa Magic</a></li>
                                    <li aria-haspopup="true"><a href="#about-3">Experience</a></li>
                                    <li aria-haspopup="true"><a href="#gallery-3">Our Gallery</a></li>
                                    <li aria-haspopup="true"><a href="#services-10">Best Solution</a></li>
                                    <li aria-haspopup="true"><a href="#pricing-1">Treatments</a></li>	
                                    <li aria-haspopup="true"><a href="#team-1">Our Experts</a></li>	
                                    <li aria-haspopup="true"><a href="#reviews-1">Testimonials</a></li>		      
                                </ul>
                            </li>	<!-- END DROPDOWN MENU -->


                            <!-- DROPDOWN MENU -->
                            <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="#">Pages <span class="wsarrow"></span></a>
                                <div class="wsmegamenu clearfix halfmenu">
                                    <div class="container-fluid">
                                        <div class="row">

                                            <!-- Links -->
                                            <ul class="col-lg-6 link-list">	
                                                <li class="fst-li"><a href="about.html">About Us</a></li>					             
                                                <li><a href="services.html">Our Services</a></li>	
                                                <li><a href="service-details.html">Service Details</a></li>
                                                <li><a href="gallery.html">Our Gallery</a></li>
                                                <li><a href="team.html">Our Experts</a></li>
                                                <li><a href="gift-cards.html">Gift Cards</a></li>
                                            </ul>

                                            <!-- Links -->
                                            <ul class="col-lg-6 link-list">							                  
                                                <li class="fst-li"><a href="pricing.html">Pricing Plans</a></li>
                                                <li><a href="booking.html">Booking Form</a></li>
                                                <li><a href="faqs.html">FAQs</a></li>					      
                                                <li><a href="terms.html">Terms &amp; Privacy</a></li>
                                                <li><a href="contacts.html">Contacts</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </li>	<!-- END DROPDOWN MENU -->


                            <!-- MEGAMENU -->
                            <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="#">Services <span class="wsarrow"></span></a>
                                <div class="wsmegamenu w-70 clearfix">
                                    <div class="container">
                                        <div class="row">

                                            <!-- MEGAMENU LINKS -->
                                            <ul class="col-md-12 col-lg-4 link-list">
                                                <li class="title txt-color-01"><p>Massages</p></li>
                                                <li class="fst-li"><a href="#">Hot Stone Massage</a></li>
                                                <li><a href="#">Traditional Thai Massage</a></li>
                                                <li><a href="#">Aromatherapy Massage</a></li>
                                                <li><a href="#">Deep Tissue Massage</a></li>		                             
                                            </ul>

                                            <!-- MEGAMENU LINKS -->
                                            <ul class="col-md-12 col-lg-4 link-list">
                                                <li class="title txt-color-01"><p>Therapies</p></li>
                                                <li class="fst-li"><a href="#">Physiotherapy</a></li>					                 
                                                <li><a href="#">Skin &amp; Beauty Care</a></li>
                                                <li><a href="#">Executive Reflexology</a></li>
                                                <li><a href="#">Aroma &amp; Jet Hydro Therapy</a></li>			              
                                            </ul>

                                            <!-- MEGAMENU LINKS -->
                                            <ul class="col-md-12 col-lg-4 link-list">
                                                <li class="title txt-color-01"><p>Treatments</p></li>
                                                <li class="fst-li"><a href="#">Spa Ritual Body Scrub</a></li>
                                                <li><a href="#">Deluxe Korean Scrub</a></li>					              
                                                <li><a href="#">Soothing Skin Body Wrap</a></li>
                                                <li><a href="#">Teatox Mud Body Treatment</a></li>
                                            </ul>
        
                                        </div>  <!-- End row -->	
                                    </div>  <!-- End container -->	
                                </div>  <!-- End wsmegamenu -->	
                            </li>	<!-- END MEGAMENU -->


                            <!-- SIMPLE NAVIGATION LINK -->
                            <li class="nl-simple" aria-haspopup="true"><a href="gift-cards.html">Gift Cards</a></li>


                            <!-- DROPDOWN MENU -->
                            <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="#">Blog <span class="wsarrow"></span></a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                    <li aria-haspopup="true"><a href="blog-classic.html">Blog Classic</a></li>
                                    <li aria-haspopup="true"><a href="blog-masonry.html">Blog Masonry</a></li>
                                    <li aria-haspopup="true"><a href="single-post.html">Single Post</a></li>	      
                                </ul>
                            </li>	<!-- END DROPDOWN MENU -->


                            <!-- SIMPLE NAVIGATION LINK -->
                            <li class="nl-simple" aria-haspopup="true"><a href="contacts.html">Contacts</a></li> 


                            <!-- HEADER CALL BUTTON -->
                            <li class="nl-simple header-phone" aria-haspopup="true">
                                <a href="tel:123456789"><span class="bg-color-09 white-color"><i class="fas fa-phone"></i></span>+12 9 8765 4321</a>
                            </li> 


                            <!-- HEADER BUTTON 
                            <li class="nl-simple" aria-haspopup="true">
                                <a href="#" class="btn btn-color-02 tra-01-hover last-link">Book Now</a>
                            </li> -->


                            <!-- HEADER SOCIAL LINKS 															
                            <li class="nl-simple txt-color-03 header-socials clearfix" aria-haspopup="true">
                                <span><a href="#" class="ico-facebook"><i class="fab fa-facebook-f"></i></a></span>
                                <span><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></span>
                                <span><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></span>
                                <span><a href="#" class="ico-dribbble"><i class="fab fa-yelp"></i></a></span>	
                            </li> -->


                        </ul>
                    </nav>	<!-- END MAIN MENU -->

                </div>
            </div>	<!-- END NAVIGATION MENU -->


        </div>     <!-- End header-wrapper -->
    </header>`,
        Thumbnail: "/assets/header/images.jpeg"
    }
]

export const teamplate = createSlice({
    name: "teamplate",
    initialState: {
        isDesktop: true,
        openSidebar: false,
        color: null,
        header: {
            open: false,
            list: dataHeader,
            current: dataHeader[1]
        },
        box: {
            open: false
        }
    },
    reducers: {
        updateIsDesktop: (state, action) => {
            return {
                ...state,
                isDesktop: action.payload
            }
        },
        openHeader: (state, action) => {
            return {
                ...state,
                openSidebar: true,
                header: {
                    ...state.header,
                    open: true
                },
                box: {
                    ...state.box,
                    open: false
                }
            }
        },
        hideHeader: (state, action) => {
            return {
                ...state,
                openSidebar: false,
                header: {
                    ...state.header,
                    open: false,
                }
            }
        },
        changeHeader: (state, action) => {
            return {
                ...state,
                header: {
                    ...state.header,
                    current: action.payload
                }
            }
        },
        openBox: (state, action) => {
            return {
                ...state,
                openSidebar: true,
                box: {
                    ...state.box,
                    open: true
                },
                header: {
                    ...state.header,
                    open: false
                }
            }
        },
        hideBox: (state, action) => {
            return {
                ...state,
                openSidebar: false,
                box: {
                    ...state.box,
                    open: false
                }
            }
        },
        setColor: (state, action) => {
            return {
                ...state,
                color: action.payload
            }
        }
    },
});

export const {
    updateIsDesktop,
    openHeader,
    hideHeader,
    changeHeader,
    openBox,
    hideBox,
    setColor
} = teamplate.actions;