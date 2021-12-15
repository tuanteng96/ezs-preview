import React from 'react';
import Routes from './Routes';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App({ store, basename }) {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
