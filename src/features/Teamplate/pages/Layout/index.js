import React from 'react'
import { useSelector } from 'react-redux';
import renderHTML from 'react-render-html';
import ReactDragList from "react-drag-list";

export default function Layout() {

    const { header, layout } = useSelector(({ teamplate }) => ({
      header: teamplate.header.current,
      layout: teamplate.layout,
    }));

    const onUpdate = (node) => {
      console.log(node);
      // const {oldIndex, newIndex} = node;
      // const newSitemap = [...dataTem];
      // const element = newSitemap[oldIndex];
      // newSitemap.splice(oldIndex, 1);
      // newSitemap.splice(oldIndex, 0, element);
      // console.log(newSitemap)
      // setDataTem(newSitemap)
    };


    return (
      <React.Fragment>
        <div className="page" id="page">
          {/* Header */}
          {renderHTML(header.Html)}
          {/* End Header */}
          {layout && (
            <ReactDragList
              dataSource={layout}
              row={(item, index) => renderHTML(item.Html)}
              onUpdate={(data) => onUpdate(data)}
              handles={false}
            />
          )}
        </div>
      </React.Fragment>
    );
}
