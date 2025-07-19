"use client";
import React, { useEffect, useState } from 'react'
import { getComments } from '@/api/comments';
import { CommentParams } from '@/types/comments';
import type { Comment } from '@/types/comments';
const useComments = (params?:CommentParams) => {
    const [comments,setComments]=useState<Comment[]>([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState<string|null>(null);

    useEffect(()=>{
        const fetchComments = async ()=>{
            setLoading(true);
            setError(null);
            try{
                const data = await getComments(params);
                setComments(data);
            }catch(error){
                console.log(error);
                setError(error instanceof Error?error.message:"Failed to get Comments");
            }finally{
                setLoading(false)
            }
        }
       
        fetchComments();
    },[params])

    return {comments,loading,error}
}

export default useComments
