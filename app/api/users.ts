import type {User, UserParams} from "../../types/users"
import usersTestData from "@/data/users.json"


export const getUsers=async (params?:UserParams):Promise<User[]>=>{
    const testMode = process.env.NEXT_PUBLIC_TEST_DATA==="true"?true:false;
    if(testMode){
        await new Promise(resolve => setTimeout(resolve, 500));
        if(params){
        const filteredUsers = usersTestData.filter((user) => {
            if (params.id && user.id !== Number(params.id)) return false;
            if (params.name && !user.name.toLowerCase().includes(params.name.toLowerCase())) return false;
            if (params.username && !user.username.toLowerCase().includes(params.username.toLowerCase())) return false;
            if (params.email && !user.email.toLowerCase().includes(params.email.toLowerCase())) return false;
            return true;
        });
        return filteredUsers;
        }else{
            return usersTestData;
        }
    }

    const query = params?"?"+new URLSearchParams(params as Record<string,string>).toString():"";

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users${query}`,{cache:"no-cache"});
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}