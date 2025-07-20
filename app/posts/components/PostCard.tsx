import React from 'react'
import { Card,CardHeader,CardTitle,CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import Link from 'next/link'

import type { Post } from '@/types/posts'
import type { User } from '@/types/users'

import ShowComments from './ShowComments.client'
const PostCard = ({post,user}:{post:Post,user?:User}) => {
  const username = user?.username||"Not found";
  const userId = user?.id||undefined;
  return (
    <Card>
        <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              <Link className='hover:text-neutral-800' href={`/users/${userId}`}>{username}</Link>
            </CardDescription>
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
