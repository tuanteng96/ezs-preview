import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import "../../../../_ezs/_assets/sass/pages/teamplate/teamplate.scss";
import Frame from "react-frame-component";
import Teamplate from "../../../../App/teamplate/layout/Teamplate";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';

// index.propTypes = {

// };

function MainPage(props) {
  const ref = useRef();
  const [height, setHeight] = useState("0px");

  const { isDesktop, openSidebar } = useSelector(({ teamplate }) => ({
    isDesktop: teamplate.isDesktop,
    openSidebar: teamplate.openSidebar,
  }));

  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  return (
    <React.Fragment>
      <Header />
      <div className="d-flex w-100">
        <div className={`teamplate-padding ${openSidebar && "open"}`}></div>
        <div className="mt-6 teamplate-browser">
          <div className="px-35">
            <div
              className={`bg-white position-relative rounded overflow-hidden teamplate-browser-content ${
                !isDesktop && "mobile-open"
              }`}
            >
              <div className="toolbar d-flex align-items-center">
                <div className="toolbar-url flex-1 mr-6">https://cser.vn</div>
                {isDesktop && (
                  <div className="toolbar-zoom w-40px text-center cursor-pointer">
                    <i className="fal fa-search-minus vertical-align-bottom"></i>
                  </div>
                )}
              </div>
              <div className="body">
                <Frame
                  ref={ref}
                  contentDidMount={onLoad}
                  contentDidUpdate={onLoad}
                  width="100%"
                  height={height}
                  style={{ border: 0 }}
                  initialContent='<!DOCTYPE html><html><head>
          <!-- GOOGLE FONTS -->
          <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link href="https://fonts.googleapis.com/css2?family=Alex+Brush&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:300,400,500,700&amp;display=swap" rel="stylesheet">

          <!-- BOOTSTRAP CSS -->
          <link href="https://cser.vn/themes/_magic/css/bootstrap.min.css" rel="stylesheet">

          <!-- FONT ICONS -->
          <link href="https://cser.vn/themes/_magic/libs/font-awesome-pro/css/all.min.css" rel="stylesheet" crossorigin="anonymous"><link href="/themes/_magic/css/flaticon.css" rel="stylesheet">

          <!-- PLUGINS STYLESHEET -->
          <link href="https://cser.vn/themes/_magic/css/menu.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/dropdown-effects/fade-down.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/tweenmax.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/magnific-popup.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/owl.carousel.min.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/flexslider.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/owl.theme.default.min.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/jquery.datetimepicker.min.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/dialog.css" rel="stylesheet">
          <link href="https://cser.vn/themes/_magic/css/fix.css" rel="stylesheet">

          <!-- TEMPLATE CSS -->

          <!-- <link href="https://cser.vn/themes/_magic/css/rose-theme.css" rel="stylesheet" /> -->
          <!-- <link href="https://cser.vn/themes/_magic/css/silk-theme.css" rel="stylesheet" /> -->
          <link href="https://cser.vn/themes/_magic/css/pink-theme.css" rel="stylesheet">

          <!-- RESPONSIVE CSS -->
          <link href="https://cser.vn/themes/_magic/css/responsive.css" rel="stylesheet">

          <style>
                body {
                    overflow-y: hidden !important;
                }
          </style>
          </head><body>
          <div id="mountHere"></div>
          </body></html>'
                >
                  <Teamplate />
                </Frame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
