import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import CreatePostPage from "./CreatePostPage";
import ViewPostPage from "./ViewPostPage";
import EditPostPage from "./EditPostPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post/create" element={<CreatePostPage />} />
          <Route path="/post/view/:postId" element={<ViewPostPage />} />
          <Route path="/post/edit/:postId" element={<EditPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AuthenticatedApp;
