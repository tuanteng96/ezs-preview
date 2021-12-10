import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../../_ezs/_assets/sass/pages/teamplate/teamplate.scss";
import { toggleHeader, updateIsDesktop } from "../../teamplateSlice";
// import PropTypes from 'prop-types';

// index.propTypes = {

// };

function Header(props) {
  const { isDesktop } = useSelector(({ teamplate }) => ({
    isDesktop: teamplate.isDesktop,
  }));
  const dispath = useDispatch();
  const changeBreakpoints = (status) => {
    dispath(updateIsDesktop(status));
  };

  const onChangeHeader = () => {
    dispath(toggleHeader());
  };

  return (
    <div className="bg-white shadow teamplate-header">
      <div className="px-35">
        <div className="d-flex justify-content-between py-2">
          <div className="w-30 d-flex">
            <div
              className="chosee-header cursor-pointer"
              onClick={onChangeHeader}
            >
              Header Page
              <i className="fal fa-angle-down ml-3 vertical-align-sub"></i>
            </div>
            <div className="chosee-add cursor-pointer ml-7">
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
          <div className="d-flex align-items-center justify-content-end w-30">
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
              <button className="btn btn-xs btn-primary">Preview</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
