import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Post } from "../types";
import { initialPosts } from "../data";

type PostsCtx = {
  posts: Post[];
  createPost: (data: Omit<Post, "id" | "createdAt">) => Post;
  updatePost: (id: string, patch: Omit<Post, "id" | "createdAt">) => boolean;
  deletePost: (id: string) => boolean;
  getPost: (id: string) => Post | undefined;
};

const Ctx = createContext<PostsCtx | null>(null);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const api: PostsCtx = useMemo(
    () => ({
      posts,
      createPost: (data) => {
        const newPost: Post = {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          ...data
        };
        setPosts((prev) => [newPost, ...prev]);
        return newPost;
      },
      updatePost: (id, patch) => {
        let ok = false;
        setPosts((prev) =>
          prev.map((p) => {
            if (p.id === id) {
              ok = true;
              return { ...p, ...patch };
            }
            return p;
          })
        );
        return ok;
      },
      deletePost: (id) => {
        const exists = posts.some((p) => p.id === id);
        if (exists) setPosts((prev) => prev.filter((p) => p.id !== id));
        return exists;
      },
      getPost: (id) => posts.find((p) => p.id === id)
    }),
    [posts]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function usePosts() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePosts must be used within PostsProvider");
  return ctx;
}
