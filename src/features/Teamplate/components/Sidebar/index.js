import React from "react";
import PropTypes from "prop-types";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import PerfectScrollbar from "react-perfect-scrollbar";

Sidebar.propTypes = {
  Title: PropTypes.string,
};

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

function Sidebar({ Title, List, Type, Current, onHide, onChange }) {
  return (
    <div className="teamplate-sidebar">
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
                  className={`item cursor-pointer ${
                    Current.ID === item.ID && "current"
                  }`}
                  key={index}
                  onClick={() => onChange(item, Type)}
                >
                  <img
                    className="w-100"
                    src={toAbsoluteUrl(item.Thumbnail)}
                    alt={item.Title}
                  />
                  <div>Chọn Header</div>
                </div>
              ))}
          </PerfectScrollbar>
        )}
      </div>
    </div>
  );
}
export default Sidebar;
