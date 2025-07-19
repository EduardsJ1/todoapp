export interface Comment {
    postId:number,
    id:number,
    name:string,
    body:string
    email:string
}

export interface CommentParams{
    postId?:number,
    id?:number,
    name?:string,
    body?:string,
    email?:string,
}