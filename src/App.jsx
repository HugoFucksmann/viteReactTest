/* eslint-disable react/prop-types */

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navigator from "./navigation/navigator";

const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
};

export default App;
