import { Link } from "react-router-dom";
import { Post } from "../types";
import "./PostCard.css";

export default function PostCard({
  post,
  onDelete
}: {
  post: Post;
  onDelete: (id: string) => void;
}) {
  const short = post.content.length > 100 ? post.content.slice(0, 100) + "..." : post.content;

  return (
    <article className="card">
      <img className="card__thumb" src={post.thumbnail} alt={post.title} />
      <div className="card__body">
        <h3 className="card__title">{post.title}</h3>
        <div className="card__meta">
          <span>{post.author}</span>
          <span>·</span>
          <time>{new Date(post.createdAt).toLocaleDateString()}</time>
          <span className="badge">{post.category}</span>
        </div>
        <p className="card__desc">{short}</p>
        <div className="card__actions">
          <Link className="btn" to={`/posts/${post.id}`}>Đọc thêm</Link>
          <button className="btn danger" onClick={() => onDelete(post.id)}>Xóa</button>
        </div>
      </div>
    </article>
  );
}
