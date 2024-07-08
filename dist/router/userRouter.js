import express from "express";
const router = express.Router();
const users = [];
const validateKeys = (obj, keys) => {
    for (let key of keys) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
};
router.get("/get_user", (req, res) => {
    const user = {
        name: "a",
        age: 12,
        email: "ara",
        password: "asdf",
        id: 1
    };
    res.json(user);
});
router.post("/create_user", (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    const userKeys = ["name", "age", "id", "email", "password"];
    const validateUser = validateKeys(newUser, userKeys);
    console.log(validateUser);
    if (!validateUser) {
        return res.json({ error: "La estructura del usuario no es correcta" });
    }
    users.push(newUser);
    users.forEach(user => {
        console.log(user.name);
    });
    return res.json({ msg: "El  user fue guardado!" });
});
export default router;
