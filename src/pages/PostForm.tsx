import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import { Category } from "../types";
import "./PostForm.css";

type Mode = "create" | "edit";

export default function PostForm({ mode }: { mode: Mode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createPost, getPost, updatePost } = usePosts();

  const current = useMemo(() => (mode === "edit" && id ? getPost(id) : null), [mode, id, getPost]);

  const [title, setTitle] = useState(current?.title ?? "");
  const [author, setAuthor] = useState(current?.author ?? "");
  const [thumbnail, setThumbnail] = useState(current?.thumbnail ?? "");
  const [content, setContent] = useState(current?.content ?? "");
  const [category, setCategory] = useState<Category>(current?.category ?? "Công nghệ");

  useEffect(() => {
    if (mode === "edit" && id && !current) {
      alert("Không tìm thấy bài viết!");
      navigate("/");
    }
  }, [mode, id, current, navigate]);

  const [errors, setErrors] = useState<{[k: string]: string}>({});

  const validate = () => {
    const e: {[k: string]: string} = {};
    if (!title.trim() || title.trim().length < 10) e.title = "Tiêu đề tối thiểu 10 ký tự";
    if (!author.trim() || author.trim().length < 3) e.author = "Tác giả tối thiểu 3 ký tự";
    if (!content.trim() || content.trim().length < 50) e.content = "Nội dung tối thiểu 50 ký tự";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    if (mode === "create") {
      const p = createPost({ title, author, thumbnail, content, category });
      alert("Đăng bài thành công!");
      navigate(`/posts/${p.id}`);
    } else if (current) {
      updatePost(current.id, { title, author, thumbnail, content, category });
      alert("Cập nhật thành công!");
      navigate(`/posts/${current.id}`);
    }
  };

  const onCancel = () => {
    if (mode === "create") navigate("/");
    else if (current) navigate(`/posts/${current.id}`);
  };

  return (
    <div className="container">
      <h1 className="form__title">{mode === "create" ? "Tạo bài viết" : "Chỉnh sửa bài viết"}</h1>

      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Tiêu đề</label>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>

        <div className="field">
          <label className="label">Tác giả</label>
          <input className="input" value={author} onChange={(e) => setAuthor(e.target.value)} />
          {errors.author && <div className="error">{errors.author}</div>}
        </div>

        <div className="field">
          <label className="label">URL ảnh thumbnail</label>
          <input className="input" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="https://..." />
        </div>

        <div className="field">
          <label className="label">Thể loại</label>
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
            <option>Công nghệ</option>
            <option>Du lịch</option>
            <option>Ẩm thực</option>
            <option>Đời sống</option>
            <option>Khác</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Nội dung</label>
          <textarea className="textarea" rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
          {errors.content && <div className="error">{errors.content}</div>}
        </div>

        <div className="form__actions">
          <button type="button" className="btn" onClick={onCancel}>Hủy</button>
          <button type="submit" className="btn primary">{mode === "create" ? "Đăng bài" : "Cập nhật"}</button>
        </div>
      </form>
    </div>
  );
}
