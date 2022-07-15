import express from "express";
import { loginRouter } from "../routes/login.js";
import passport from "passport";
import "../middlewares/linkedin.js"

const app = express();

app.use(express.json());
app.use(passport.initialize());

// app.use("/auth", passport.authenticate("auth-linkedin", {
//     scope: [
        
//     ]
// })

app.listen(3000, () => console.log("http://localhost:3000"));
