import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="posts" element={<Layout />} >
          <Route index element={<PostsPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>

        <Route path="create" element={<Layout />} >
          <Route index element={<CreatePostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;