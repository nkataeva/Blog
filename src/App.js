import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import PostsPage from "./pages/PostsPage";
import ShowPostPage from "./pages/ShowPostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="posts" element={<Layout />}>
          <Route index element={<PostsPage/>} />
          <Route path="postid" element={<ShowPostPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;