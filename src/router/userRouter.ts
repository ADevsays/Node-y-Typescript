import express, {Request, Response} from "express";
import { User } from "../interfaces/User";

const router = express.Router();
const users:User[] = [];

const validateKeys = <T>(obj:any, keys: (keyof T)[])=>{
    for(let key of keys){
        if(!(key in obj)){
            return false;
        }
    }
    return true;
};

router.get("/get_user", (req: Request, res:Response)=>{
    const user:User = {
        name: "a",
        age: 12,
        email: "ara",
        password: "asdf",
        id: 1
    }
    res.json(user);
});

router.post("/create_user", (req: Request, res: Response)=>{
    const newUser = req.body as User;
    console.log(newUser);
    const userKeys = ["abc"];
    const validateUser = validateKeys<User>(newUser, userKeys);
    console.log(validateUser)
    if(!validateUser){
        return res.json({error: "La estructura del usuario no es correcta"})
    }
    users.push(newUser);
    users.forEach(user=>{
        console.log(user.name);
    })
    return res.json({msg: "El  user fue guardado!"});
});

export default router;

