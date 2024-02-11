import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ButtonComponent from "./components/Chakra/Form/Button";
import { ChakraProvider } from "@chakra-ui/react";
import CheckboxComponent from "./components/Chakra/Checkbox";
import AlertComponent from "./components/MUI/Alert";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ButtonComponent />
      <CheckboxComponent />
    </ChakraProvider>
    <AlertComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
