import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import demo from "./reducers/index";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(demo)}>
    <App />
  </Provider>,
  rootElement
);
