import type { Photo,PhotosParams } from "@/types/photos";
import PhotosTestData from "@/data/photos.json"

export const getPhotos=async (params?:PhotosParams):Promise<Photo[]>=>{
    const testMode = process.env.NEXT_PUBLIC_TEST_DATA==="true"?true:false;
    const query = params?"?"+new URLSearchParams(params as Record<string,string>).toString():"";
    if(testMode){

        await new Promise(resolve => setTimeout(resolve, 500));
        if(!params){
            return PhotosTestData;
        }else{
            const filteredPhotos = PhotosTestData.filter((photo) => {
                if (params.albumId && photo.albumId !== Number(params.albumId)) return false;
                if (params.id && photo.id !== Number(params.id)) return false;
                if (params.title && !photo.title.toLowerCase().includes(params.title.toLowerCase())) return false;
                if (params.url && !photo.url.toLowerCase().includes(params.url.toLowerCase())) return false;
                if (params.thumbnailUrl && !photo.thumbnailUrl.toLowerCase().includes(params.thumbnailUrl.toLowerCase())) return false;
                return true;
            });
            
            return filteredPhotos;
        }
    }
    

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos${query}`,{cache:"no-cache", next:{revalidate:0}});
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}