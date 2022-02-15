import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Flex} from "./flex.js";
import {Grid} from "./grid.js";
import {GridExample} from "./grid-example.js";
import {FlexExample} from "./flex_example.js";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/flex" element={<Flex />}></Route>
        <Route path="/flexExample" element={<FlexExample />}></Route>
        <Route path="/grid" element={<Grid />}></Route>
        <Route path="/gridExample" element={<GridExample />}></Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
