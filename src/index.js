import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Flex} from "./flex.js";
import {Grid} from "./grid.js";
import {GridExample} from "./grid-example.js";
import {FlexExample} from "./flex_example.js";

const list=<ul>
<li><a href="/flex">Flex tutorial</a></li>
<li><a href="/flexExample">Flex Example</a></li>
<li><a href="/grid">Grid tutorial</a></li>
<li><a href="/gridExample">Grid Example</a></li>
</ul>;

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={list}></Route>
        <Route path="/flex" element={<Flex />}></Route>
        <Route path="/flexExample" element={<FlexExample />}></Route>
        <Route path="/grid" element={<Grid />}></Route>
        <Route path="/gridExample" element={<GridExample />}></Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
