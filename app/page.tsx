export const dynamic = 'force-dynamic';


import type { Post } from "@/types/posts";
import type { User } from "@/types/users";

import { getPosts } from "./api/posts";
import { getUsers } from "./api/users";

import PostCard from "./posts/components/PostCard";
import MainLayot from "@/layouts/MainLayot";
export default async function Home() {
  const posts:Post[]=await getPosts();
  const users:User[]=await getUsers();
  return (
    <MainLayot>
      <div className="space-y-5 mt-5">
      {posts.map((post)=>{
        const user = users.find((user)=>user.id===post.userId)
        return(
        <PostCard key={post.id} post={post} user={user}/>
        )
      })}
      </div>
    </MainLayot>
  );
}
