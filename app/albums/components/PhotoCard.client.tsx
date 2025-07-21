"use client"
import React, { useState } from 'react'

const PhotoCard = ({ className, ...imgProps }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const [imageError,setImageErorr]=useState(false);

  return (
        <div className='aspect-square w-full'>
            {imageError?(
            <div
                className={`bg-neutral-200 flex items-center justify-center w-full h-full object-cover rounded ${className||''}`}
            >
                <p className='font-medium text-neutral-500 cursor-default select-none'>Failed to get Image</p>
            </div>
            ):(
            
            <img 
            {...imgProps}

            className={`w-full h-full object-cover rounded ${className||''}`}
            onError={()=>setImageErorr(true)}
            />
            )}
    </div>
  )
}

export default PhotoCard
