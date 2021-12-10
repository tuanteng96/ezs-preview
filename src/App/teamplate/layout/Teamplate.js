/*eslint-disable */

import React, { useState } from 'react'
import ReactDragList from 'react-drag-list'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import Box5 from './components/Box5'

const sitemap = [
    {
        ID: 1,
        Title: 'Box1',
        Html: <Box1 />
    },
    {
        ID: 2,
        Title: 'Box2',
        Html: <Box2 />
    },
    {
        ID: 3,
        Title: 'Box3',
        Html: <Box3 />
    },
    {
        ID: 4,
        Title: 'Box4',
        Html: <Box4 />
    },
    {
        ID: 5,
        Title: 'Box5',
        Html: <Box5 />
    }
]

export default function Teamplate() {
    const [dataTem, setDataTem] = useState(null);

    const onUpdate = (node) => {
        console.log(node)
        // const {oldIndex, newIndex} = node;
        // const newSitemap = [...dataTem];
        // const element = newSitemap[oldIndex];
        // newSitemap.splice(oldIndex, 1);
        // newSitemap.splice(oldIndex, 0, element);
        // console.log(newSitemap)
        // setDataTem(newSitemap)
    }

    const onExport = () => {
        console.log(dataTem);
    }

    return (
        <div className="page" id="page">
            {/* <button onClick={onExport}>Export</button> */}
            <ReactDragList
                dataSource={sitemap}
                row={(item, index) => item.Html}
                onUpdate={(data) => onUpdate(data)}
                handles={false}
            />
            <Footer />
        </div>
    )
}
