"use client";
import React from 'react'
import type { AlbumWithPhotos } from '@/types/albums';
import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card';
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from '@/components/ui/carousel';
import PhotoCard from './PhotoCard.client';
const AlbumCarosel = ({AlbumWithPhotos}:{AlbumWithPhotos:AlbumWithPhotos}) => {
    const album=AlbumWithPhotos;
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-center text-3xl'>
                {album.title}
            </CardTitle>
        </CardHeader>
        <CardContent className='px-20'>
            <Carousel className='w-full'>
                <CarouselContent>
                    {
                        album.photos.map((photo) => (
                            <CarouselItem key={photo.id} className='sm:basis-1/2 md:basis-1/3'>
                                <PhotoCard src={photo.url} alt={photo.title} width={500} height={500}/>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                <CarouselPrevious/>
                <CarouselNext/>

            </Carousel>
        </CardContent>
    </Card>
  )
}

export default AlbumCarosel
