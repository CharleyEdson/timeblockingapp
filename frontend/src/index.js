import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./context/activities";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Provider>
          <App />
        </Provider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
