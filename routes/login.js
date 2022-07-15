import { Router } from "express";

const loginRouter = Router();

loginRouter.get("/linkedin", (req, res) => res.send("Hola"));

export { loginRouter };