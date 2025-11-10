import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostForm from "./pages/PostForm";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create" element={<PostForm mode="create" />} />
        <Route path="/posts/create" element={<PostForm mode="create" />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/edit/:id" element={<PostForm mode="edit" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
