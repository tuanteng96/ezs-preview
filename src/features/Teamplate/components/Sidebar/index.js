import React from "react";
import PropTypes from "prop-types";
import { toAbsolutePath } from "../../../../_ezs/_helpers/AssetsHelpers";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Animated } from "react-animated-css";

Sidebar.propTypes = {
  Title: PropTypes.string,
};

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

function Sidebar({ Title, List, Type, Current, onHide, onChange }) {
  return (
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} className="teamplate-sidebar" animationInDuration={500}>
      <div className="team-panel-header d-flex align-items-center justify-content-between">
        <h4 className="mb-0">{Title}</h4>
        <div className="toolbar">
          <button
            type="button"
            className="btn-close"
            onClick={() => onHide(Type)}
          >
            <i className="fal fa-times"></i>
          </button>
        </div>
      </div>
      <div className="team-panel-body">
        {Type === "Header" && (
          <PerfectScrollbar
            options={perfectScrollbarOptions}
            className="scroll"
            style={{ position: "relative", height: "100%" }}
          >
            {List &&
              List.map((item, index) => (
                <div
                  className={`item cursor-pointer shadow ${Current.ID === item.ID && "current"
                    }`}
                  key={index}
                  onClick={() => onChange(item, Type)}
                >
                  <img
                    className="w-100"
                    src={toAbsolutePath(item.Thumbnail)}
                    alt={item.Title}
                  />
                  {Current.ID === item.ID ? (
                    <div className="choose bg-success">
                      <i className="fal fa-check"></i> Đang chọn
                    </div>
                  ) : (
                    <div className="choose bg-primary">Chọn Header</div>
                  )}
                </div>
              ))}
          </PerfectScrollbar>
        )}
        {Type === "Box" && (
          <PerfectScrollbar
            options={perfectScrollbarOptions}
            className="scroll"
            style={{ position: "relative", height: "100%" }}
          >
            {List &&
              List.map((item, index) => (
                <div
                  className={`item cursor-pointer shadow`}
                  key={index}
                  onClick={() => onChange(item, Type)}
                >
                  <img
                    className="w-100"
                    src={toAbsolutePath(item.Thumbnail)}
                    alt={item.Title}
                  />
                  <div className="choose bg-primary">Chọn Section</div>
                </div>
              ))}
          </PerfectScrollbar>
        )}
      </div>
    </Animated>
  );
}
export default Sidebar;
