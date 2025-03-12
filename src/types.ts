export interface signup{
    name : string,
    email : string,
    password: string,
    createdAt?:string
}
export interface query{
    items? : number,
    food? : boolean
}

export interface params{
    id?:number
}

export interface res{
    status:number,
    message: string
}

export interface movie{
    backdrop_path : string,
    title:string,
    overview:string,
    poster_path:string,
    original_language:string,
    release_date:string,
    video:string,
    favourite:boolean,
    type:string
}

export interface login{
    email: String,
    password: String
}