import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import "../../../../_ezs/_assets/sass/pages/teamplate/teamplate.scss";
import Frame from "react-frame-component";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Layout from "../Layout";
import {
  changeBox,
  changeFooter,
  changeHeader,
  hideBox,
  hideFooter,
  hideHeader,
} from "../../teamplateSlice";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";

// import PropTypes from 'prop-types';

// index.propTypes = {

// };

function MainPage(props) {
  const ref = useRef();
  const [height, setHeight] = useState("0px");
  const dispath = useDispatch();

  const {
    isDesktop,
    openSidebar,
    choose,
    headerList,
    headerCurrent,
    isHeader,
    footerList,
    footerCurrent,
    isFooter,
    Color,
    isBox,
    boxList,
  } = useSelector(({ teamplate }) => ({
    isDesktop: teamplate.isDesktop,
    openSidebar: teamplate.openSidebar,
    choose: teamplate.choose,
    headerList: teamplate.header.list,
    headerCurrent: teamplate.header.current,
    isHeader: teamplate.header.open,
    footerList: teamplate.footer.list,
    footerCurrent: teamplate.footer.current,
    isFooter: teamplate.footer.open,
    Color: teamplate.color.current,
    isBox: teamplate.box.open,
    boxList: teamplate.box.list,
  }));

  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };
  const onHideSidebar = (Type) => {
    if (Type === "Header") {
      dispath(hideHeader());
    }
    if (Type === "Footer") {
      dispath(hideFooter());
    }
    if (Type === "Box") {
      dispath(hideBox());
    }
  };

  const onChangeAction = (item, Type) => {
    if (Type === "Header") {
      dispath(changeHeader(item));
    }
    if (Type === "Footer") {
      dispath(changeFooter(item));
    }
    if (Type === "Box") {
      const action = {
        item: item,
        choose: choose,
      };
      dispath(changeBox(action));
    }
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
                  initialContent={`
                    <!DOCTYPE html><html style="${
                      Color && `--default: ${Color}`
                    }"><head>
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
          <link href="${toAbsoluteUrl("/css/style.css")}" rel="stylesheet">
          <style>
                body {
                    overflow-y: hidden !important;
                }
          </style>
          </head><body>
          <div id="mountHere"></div>
          </body></html>
                  `}
                >
                  <Layout />
                </Frame>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isHeader && (
        <Sidebar
          Title="Chọn Header"
          List={headerList}
          Type="Header"
          Current={headerCurrent}
          onHide={onHideSidebar}
          onChange={onChangeAction}
        />
      )}

      {isFooter && (
        <Sidebar
          Title="Chọn Footer"
          List={footerList}
          Type="Footer"
          Current={footerCurrent}
          onHide={onHideSidebar}
          onChange={onChangeAction}
        />
      )}

      {isBox && (
        <Sidebar
          Title="Chọn Section"
          List={boxList}
          Type="Box"
          Current=""
          onHide={onHideSidebar}
          onChange={onChangeAction}
        />
      )}
    </React.Fragment>
  );
}

export default MainPage;
