import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import renderHTML from "react-render-html";
import ReactDragList from "react-drag-list";
import "../../../../_ezs/_assets/sass/pages/teamplate/teamplate.scss";
import { addPosition, deleteBox, onDragDrop, onPosition } from "../../teamplateSlice";

export default function Layout() {
  const dispath = useDispatch();
  const { header, layout, footer } = useSelector(({ teamplate }) => ({
    header: teamplate.header.current,
    layout: teamplate.layout,
    footer: teamplate.footer.current,
  }));

  const onUpdate = (node) => {
    console.log(node)
    const {oldIndex, newIndex} = node;
    dispath(onDragDrop({
      oldIndex: oldIndex,
      newIndex: newIndex
    }))
    const newSitemap = [...layout];
    const element = newSitemap[oldIndex];
    newSitemap.splice(oldIndex, 1);
    newSitemap.splice(oldIndex, 0, element);
  };

  const changePosition = (Type, index) => {
    dispath(
      onPosition({
        Type,
        index,
      })
    );
  };

  const onAddPositon = (positon) => {
    dispath(addPosition(positon));
  }

  const onDelete = (index) => {
    dispath(deleteBox(index));
  };

  return (
    <Fragment>
      <div className="page" id="page">
        {/* Header */}
        <Fragment>{renderHTML(header.Html)}</Fragment>
        {/* End Header */}
        {layout && (
          <ReactDragList
            dataSource={layout}
            row={(item, index) => (
              <div className="has-presets" key={index}>
                <div className="list-span-overlay">
                  <button
                    className="btn-add btn-add-top"
                    onClick={() =>
                      onAddPositon({
                        index: index,
                        positon: "top",
                      })
                    }
                  >
                    <i className="fal fa-plus"></i>
                  </button>
                  <button
                    className="btn-add btn-add-bottom"
                    onClick={() =>
                      onAddPositon({
                        index: index,
                        positon: "bottom",
                      })
                    }
                  >
                    <i className="fal fa-plus"></i>
                  </button>
                  <div className="list-downup">
                    <button
                      className="btn-down"
                      onClick={() => changePosition("down", index)}
                    >
                      <i className="fal fa-long-arrow-down"></i>
                    </button>
                    <button
                      className="btn-up"
                      onClick={() => changePosition("up", index)}
                    >
                      <i className="fal fa-long-arrow-up"></i>
                    </button>
                  </div>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(index)}
                  >
                    <i className="fal fa-trash-alt"></i>
                  </button>
                </div>
                {renderHTML(item.Html)}
              </div>
            )}
            onUpdate={(data) => onUpdate(data)}
            handles={false}
          />
        )}
        {/* Footer */}
        <Fragment>{renderHTML(footer.Html)}</Fragment>
        {/* End Footer */}
      </div>
    </Fragment>
  );
}
