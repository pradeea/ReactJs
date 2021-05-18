import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import demo from "./reducers/index";
import thunk from "redux-thunk";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={createStore(demo, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  rootElement
);
