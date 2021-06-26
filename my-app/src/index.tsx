import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { MainWrapper } from "./components/MainWrapper/MainWrapper";
import { Provider } from "react-redux";
import store from "./tools/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Reset />
      <MainWrapper />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
