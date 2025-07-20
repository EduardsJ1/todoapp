import type { Comment,CommentParams } from "@/types/comments";
import commentTestData from "@/data/comments.json"

export const getComments=async (params?:CommentParams):Promise<Comment[]>=>{
    const testMode = process.env.NEXT_PUBLIC_TEST_DATA==="true"?true:false;
    const query = params?"?"+new URLSearchParams(params as Record<string,string>).toString():"";
    if(testMode){

        await new Promise(resolve => setTimeout(resolve, 500));
        if(!params){
            return commentTestData;
        }else{
            console.log("using comment filters")
            const filteredComments = commentTestData.filter((comment) => {
                if (params.postId && comment.postId !== Number(params.postId)) return false;
                if (params.id && comment.id !== Number(params.id)) return false;
                if (params.name && !comment.name.toLowerCase().includes(params.name.toLowerCase())) return false;
                if (params.body && !comment.body.toLowerCase().includes(params.body.toLowerCase())) return false;
                return true;
            });
            return filteredComments;
        }
    }
    

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments${query}`,{cache:"no-cache", next:{revalidate:0}});
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}