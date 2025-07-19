import React from 'react'
import { Card,CardHeader,CardTitle,CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Post } from '@/types/posts'
import ShowComments from './ShowComments.client'
const PostCard = ({post}:{post:Post}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{post.body}</p>
        </CardContent>
        <CardFooter>
            <ShowComments postId={post.id}/>
        </CardFooter>
    </Card>
  )
}

export default PostCard
