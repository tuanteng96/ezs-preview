import React, { Fragment, useRef, useState } from "react";
import Frame from "react-frame-component";
import { useSelector } from "react-redux";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import renderHTML from "react-render-html";
// import PropTypes from 'prop-types';

// index.propTypes = {

// };

function ViewPage(props) {
  const ref = useRef();
  const [height, setHeight] = useState("0px");

  const { header, footer, layout, Color } = useSelector(({ teamplate }) => ({
    header: teamplate.header.current,
    footer: teamplate.footer.current,
    Color: teamplate.color.current,
    layout: teamplate.layout,
  }));

  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  return (
    <React.Fragment>
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
          </head><body>
          <div id="mountHere"></div>
          </body></html>
                  `}
      >
        <Fragment>
          <Fragment>{renderHTML(header.Html)}</Fragment>

          {layout.map((item, index) => (
            <Fragment key={index}>{renderHTML(item.Html)}</Fragment>
          ))}

          <Fragment>{renderHTML(footer.Html)}</Fragment>
        </Fragment>
      </Frame>
    </React.Fragment>
  );
}

export default ViewPage;
