import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Fragment>
          <Route exact path="/" element={<Home />} />
        </Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
