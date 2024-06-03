import express from "express";
const routes = express.Router();
// Controllers
import User from "../controllers/UserController";
// Validators
import validate from "../middlewares/HandleValidation";
const { userCreateValidator } = require("../middlewares/UserValidation")


routes.get("/api/users", User.getUser)
routes.post("/api/register", validate, userCreateValidator(), User.addUser)

export default routes