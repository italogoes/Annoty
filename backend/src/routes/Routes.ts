import express from "express";
import User from "../controllers/UserController";
const routes = express.Router();

routes.get("/api/users", User.getUser)
routes.post("/api/register", User.addUser)

export default routes