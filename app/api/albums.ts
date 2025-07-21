import type { Album,AlbumsParams } from "@/types/albums";
import AlbumTestData from "@/data/albums.json"

export const getAlbums=async (params?:AlbumsParams):Promise<Album[]>=>{
    const testMode = process.env.NEXT_PUBLIC_TEST_DATA==="true"?true:false;
    const query = params?"?"+new URLSearchParams(params as Record<string,string>).toString():"";
    if(testMode){

        await new Promise(resolve => setTimeout(resolve, 500));
        if(!params){
            return AlbumTestData;
        }else{
            const filteredAlbums = AlbumTestData.filter((album) => {
                if (params.userId && album.userId !== Number(params.userId)) return false;
                if (params.id && album.id !== Number(params.id)) return false;
                if (params.title && !album.title.toLowerCase().includes(params.title.toLowerCase())) return false;
                return true;
            });

            return filteredAlbums;
        }
    }
    

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums${query}`,{cache:"no-cache", next:{revalidate:0}});
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}