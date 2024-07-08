const test:string = "asdf";
const test1:boolean = true;
const test2:number = 2;

const arrayNumbers = [1,2,3, "HOla", true];
const verify: (number | string | boolean)[] = [1,2, "?asf", true];

const tuple: [number, string | boolean] = [2123, true];

enum Directions{
    Up, 
    Down, 
    Left, 
    Right
};

enum Days{
    Monday, 
    Tuesday, 
    Wendesday
}

const direction: Directions = Directions.Down;
const day: Days = Days.Tuesday;

//any, unknow, void

const nameUser:unknown = "Valor que llega desde el api";

if(nameUser && typeof nameUser == "string"){
    const realName:string = nameUser;
}

const voidFn:()=> string = ()=>{
    return "no retorna nada";
}


//Clean code