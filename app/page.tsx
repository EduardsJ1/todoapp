import type { Post } from "@/types/posts";
import { getPosts } from "@/api/posts";
import PostCard from "./posts/components/PostCard";
import MainLayot from "@/layouts/MainLayot";
export default async function Home() {
  const posts:Post[]=await getPosts();
  return (
    <MainLayot>
      <div className="space-y-5 mt-5">
      {posts.map((post)=>(
        <PostCard key={post.id} post={post}/>
      ))}
      </div>
    </MainLayot>
  );
}
