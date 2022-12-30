import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { ConfigProvider } from "antd";
import "antd/dist/antd.variable.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import InfoRoadMap from "../src/components/infoRoadMap/InfoRoadMap";

const root = ReactDOM.createRoot(document.getElementById("root"));
ConfigProvider.config({
  theme: {
    primaryColor: "#DC8900",
    errorColor: "#ff4d4f",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#0b4436",
    greenColor: "#0b4436",
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider>
          <InfoRoadMap />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
