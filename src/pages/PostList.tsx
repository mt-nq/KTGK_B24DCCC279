import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import PostCard from "../components/PostCard";
import "./PostList.css";

export default function PostList() {
  const { posts, deletePost } = usePosts();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    if (!k) return posts;
    return posts.filter((p) => p.title.toLowerCase().includes(k));
  }, [q, posts]);

  const onDelete = (id: string) => {
    const ok = confirm("Bạn có chắc muốn xóa bài viết này?");
    if (ok) deletePost(id);
  };

  return (
    <div className="container">
      <div className="list__top">
        <h1 className="list__title">Bài viết <span className="count">({filtered.length})</span></h1>
        <div className="list__actions">
          <input
            className="input"
            placeholder="Lọc theo tiêu đề..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="btn primary" onClick={() => navigate("/create")}>
            Viết bài mới
          </button>
        </div>
      </div>

      <div className="grid">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
