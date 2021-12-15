import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../../_ezs/_assets/sass/pages/teamplate/teamplate.scss";
import { openBox, openFooter, openHeader, setColor, updateIsDesktop } from "../../teamplateSlice";
// import PropTypes from 'prop-types';

// index.propTypes = {

// };

function Header(props) {
  const { isDesktop, Color, ColorList } = useSelector(({ teamplate }) => ({
    isDesktop: teamplate.isDesktop,
    Color: teamplate.color.current,
    ColorList: teamplate.color.list,
  }));
  const dispath = useDispatch();
  const changeBreakpoints = (status) => {
    dispath(updateIsDesktop(status));
  };

  const onChangeHeader = () => {
    dispath(openHeader());
  };

  const onChangeFooter = () => {
    dispath(openFooter());
  }

  const onChangeBox = () => {
    dispath(openBox());
  };

  const onChangeColor = (color) => {
    dispath(setColor(color));
  }

  return (
    <div className="bg-white shadow teamplate-header">
      <div className="px-35">
        <div className="d-flex justify-content-between">
          <div className="w-30 d-flex align-items-center h-48px">
            <div
              className="chosee-header cursor-pointer"
              onClick={onChangeHeader}
            >
              Header Page
              <i className="fal fa-angle-down ml-3 vertical-align-sub"></i>
            </div>
            <div
              className="chosee-header cursor-pointer ml-2"
              onClick={onChangeFooter}
            >
              Footer Page
              <i className="fal fa-angle-down ml-3 vertical-align-sub"></i>
            </div>
            <div
              className="chosee-header cursor-pointer ml-2"
              onClick={onChangeBox}
            >
              Thêm mới
              <i className="fal fa-angle-down ml-3 vertical-align-sub"></i>
            </div>
          </div>
          <div className="logo w-75px d-flex align-items-center">
            <img
              className="w-100"
              src="https://ezs.vn/wp-content/uploads/2019/10/logo-footer.png"
              alt="EZS.VN"
            />
          </div>
          <div className="d-flex align-items-center justify-content-end w-30 h-48px">
            <div className="list-scheme h-100 d-flex">
              <div className="scheme-current cursor-pointer d-flex align-items-center">
                <div
                  className="w-30px h-30px rounded-circle"
                  style={{ backgroundColor: Color }}
                ></div>
                <i className="fal fa-angle-down ml-3"></i>
              </div>
              <ul>
                {ColorList &&
                  ColorList.map((item, index) => (
                    <li key={index}>
                      <div
                        onClick={() => onChangeColor(item)}
                        className="w-30px h-30px rounded-circle cursor-pointer"
                        style={{ backgroundColor: item }}
                      ></div>
                      {item === Color && <i className="fal fa-check"></i>}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="divider ml-5 mr-2"></div>
            <div className="list-breakpoints h-100">
              <div className="breakpoints-current px-4 d-flex align-items-center h-100 cursor-pointer text-dark text-hover-primary">
                {isDesktop ? (
                  <i className="fal fa-desktop"></i>
                ) : (
                  <i className="fal fa-mobile"></i>
                )}
                <i className="fal fa-angle-down ml-3"></i>
              </div>
              <ul>
                <li
                  className={`text-hover-primary ${
                    isDesktop && "text-primary"
                  }`}
                  onClick={() => changeBreakpoints(true)}
                >
                  <i className="fal fa-desktop"></i>
                  Desktop
                </li>
                <li
                  className={`text-hover-primary ${
                    !isDesktop && "text-primary"
                  }`}
                  onClick={() => changeBreakpoints(false)}
                >
                  <i className="fal fa-mobile"></i>
                  Mobile
                </li>
              </ul>
            </div>
            <div className="divider ml-2 mr-5"></div>
            <div>
              <Link to="/teamplate/view" className="btn btn-xs btn-primary">
                Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
