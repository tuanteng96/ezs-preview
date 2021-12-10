import React from 'react'
import { useSelector } from 'react-redux';
import renderHTML from 'react-render-html';

export default function Layout() {

    const { header } = useSelector(({ teamplate }) => ({
        header: teamplate.header.current,
    }));

    return (
        <React.Fragment>
            <div className="page" id="page">
                {/* Header */}
                {renderHTML(header.Html)}
                {/* End Header */}
            </div>
        </React.Fragment>
    )
}
