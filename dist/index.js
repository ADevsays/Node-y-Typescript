import express from "express";
import userRouter from "./router/userRouter.js";
const app = express();
app.use(express.json());
const port = 3001;
app.use("/user", userRouter);
app.get("/holamundo", (req, res) => {
    //req 
    //res
    const response = {
        message: "Hola mundo"
    };
    res.json(response);
});
app.post("/sayHello", (req, res) => {
    const message = req.body.msg;
    console.log(message);
    res.json({ msg: "El mensaje fue recibido correctamente" });
});
app.listen(port, () => {
    console.log(`El servidor se ha levantado en http://localhost:${port}`);
});
