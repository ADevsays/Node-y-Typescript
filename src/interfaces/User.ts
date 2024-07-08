export interface User{
    name: string, 
    age: number,
    id: number,
    email: string, 
    password: string
    [key:string]:string | number
}