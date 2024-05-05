import { Router } from "express";
import { sayHello } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.get('/', sayHello)

export default authRouter