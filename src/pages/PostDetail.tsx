import { Link, useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const { getPost, deletePost } = usePosts();
  const navigate = useNavigate();

  const post = id ? getPost(id) : undefined;

  if (!post) {
    return (
      <div className="container">
        <p>Không tìm thấy bài viết.</p>
        <Link className="btn" to="/">Quay lại</Link>
      </div>
    );
  }

  const handleDelete = () => {
    const ok = confirm("Bạn có chắc muốn xóa bài viết này?");
    if (ok) {
      deletePost(post.id);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="detail__top">
        <button className="btn" onClick={() => navigate(-1)}>Quay lại</button>
        <div className="detail__gap"></div>
        <Link className="btn" to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link>
        <button className="btn danger" onClick={handleDelete}>Xóa bài viết</button>
      </div>

      <article className="detail">
        <img className="detail__thumb" src={post.thumbnail} alt={post.title} />
        <h1 className="detail__title">{post.title}</h1>
        <div className="detail__meta">
          <span><strong>{post.author}</strong></span>
          <span>·</span>
          <time>{new Date(post.createdAt).toLocaleDateString()}</time>
          <span className="badge">{post.category}</span>
        </div>
        <p className="detail__content">{post.content}</p>
      </article>
    </div>
  );
}
