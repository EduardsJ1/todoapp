"use client";
import React from 'react'
import useAlbums from '@/app/albums/hooks/useAlbums';
import AlbumCarosel from './AlbumCarosel.client';
import { Card,CardHeader,CardContent,CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
const UserAlbums = ({userId}:{userId:number}) => {
  const {AlbumWithPhotos,loading,error} =  useAlbums({userId:userId});
  console.log("user albums is loading:"+loading);
  console.log(AlbumWithPhotos);
  if(loading){
    return(
      <Card className='mt-10 bg-neutral-50'>
      <CardHeader>
        <CardTitle className='text-4xl text-center'>User Albums</CardTitle>
      </CardHeader>
      <CardContent className='space-y-5'>
        <Card>
          <CardHeader>
                <Skeleton className='h-8 w-48 mx-auto bg-neutral-400' />
          </CardHeader>
          <CardContent className='px-20'>
            <div className='flex gap-4 overflow-hidden justify-center'>
              {Array.from({length: 3}).map((_, photoIndex) => (
                <Skeleton key={photoIndex} className='aspect-square w-56 rounded bg-neutral-400'/>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
    )
  }


  return (
    <Card className='mt-10 bg-neutral-50'>
      <CardHeader>
        <CardTitle className='text-4xl text-center'>User Albums</CardTitle>
      </CardHeader>
      <CardContent className='space-y-5'>
        {
          AlbumWithPhotos.map((album)=>(
            <AlbumCarosel key={album.id} AlbumWithPhotos={album}/>
          ))
        }
      </CardContent>
    </Card>
  )
}

export default UserAlbums
