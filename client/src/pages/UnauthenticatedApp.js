import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "../App.css";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UnauthenticatedApp;
