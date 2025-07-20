import type {Post} from "../../types/posts"
import postsTestData from "@/data/posts.json"


export const getPosts=async ():Promise<Post[]>=>{
    const testMode = process.env.NEXT_PUBLIC_TEST_DATA==="true"?true:false;
    if(testMode){
        return postsTestData;
    }


    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-cache", next:{revalidate:0}});
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}