import type {User} from "../types/users"
const urlPath = ()=>{
    if(process.env.TEST_DATA==="true"){
        console.log("enviorment TEST DATA:"+ process.env.TEST_DATA);
         return "http://localhost:3000/data/users.json"
    }else{
        console.log("enviorment TEST DATA:"+ process.env.TEST_DATA);
        return "https://jsonplaceholder.typicode.com/users"
    }
    // if(process.env.NODE_ENV==="development"){
    //     return "http://localhost:3000/data/users.json"
    // }else{
    //     return "https://jsonplaceholder.typicode.com/users"
    // }
}

export const getUsers=async ():Promise<User[]>=>{
    try {
        const res = await fetch(urlPath());
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        // Return empty array as fallback during build
        return [];
    }
}