import React from 'react';
import Routes from './Routes';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import Frame from 'react-frame-component';
// import Teamplate from './teamplate/layout/Teamplate';

function App({ store, basename }) {
  // const ref = useRef();
  // const [height, setHeight] = useState("0px");

  // const onLoad = () => {
  //   setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  // };
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
