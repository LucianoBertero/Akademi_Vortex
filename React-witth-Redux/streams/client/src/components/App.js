import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEditWrapper from "./streams/StreamEditWrapper";
import { Header } from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          {/* <Route path="/streams/edit/:id" element={<StreamEdit />} /> */}
          <Route path="/streams/edit/:id" element={<StreamEditWrapper />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
