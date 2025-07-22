"use client"
import React, { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { getComments } from '@/app/api/comments'
import type { Comment } from '@/types/comments'
import { Button } from '@/components/ui/button'
import { Card,CardHeader,CardTitle,CardDescription,CardContent } from '@/components/ui/card'
const ShowComments = ({postId}:{postId:number}) => {
    const [open,setOpen]=useState(false);
    const [comments,setComments]=useState<Comment[]|[]>([]);
    const [loading,setLoading]=useState(false)

    const handleClick=async()=>{
        const newOpen=!open;
        setOpen(newOpen);
        if(newOpen){//fetch only when opening
            try{
                if(comments.length===0){
                    setLoading(true);
                    console.log("fetching")
                    const commentData= await getComments({postId:postId});
                    setComments(commentData);
                    console.log(commentData);
                }
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false)
            }
        }
    }
  return (
    <div className='w-full'>
        <Button 
            onClick={()=>handleClick()}
            className='cursor-pointer'
        >
            {open?"Hide Comments":"Show Comments"}
        </Button>
        <div className={`space-y-5 mt-5 ${open?"":"hidden"}`}>
            {loading?
                <Skeleton className='h-36 w-full'/>:
                    <>
                    {comments.length!=0?
                        <>
                            {comments.map((comment)=>(
                                <Card key={comment.id} className='w-full'>
                                    <CardHeader>
                                        <CardTitle>{comment.name}</CardTitle>
                                        <CardDescription>{comment.email}</CardDescription>
                                    </CardHeader>
                                    <CardContent>{comment.body}</CardContent>
                                </Card>
                            ))}
                        </>:
                        <div>
                            <p>No data</p>
                        </div>
                    }
                    </>
            }
        </div>
    </div>
  )
}

export default ShowComments
