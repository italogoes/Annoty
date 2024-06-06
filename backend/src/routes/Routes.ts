import express from "express";
const routes = express.Router();
// Controllers
import User from "../controllers/UserController";
// Validators
import validate from "../middlewares/HandleValidation";
import authenticate from "../middlewares/Authenticate";
import Project from "../controllers/ProjectController";
const { userCreateValidator } = require("../middlewares/UserValidation")

// User routes
routes.get("/api/users", authenticate, User.getUser)
routes.post("/api/register", validate, userCreateValidator(), User.addUser)
routes.post("/api/login", User.loginUser)

// Project route
routes.get("/api/projects", authenticate, Project.getProjects)
routes.post("/api/projects")
routes.put("/api/projects/:id")
routes.delete("/api/projects/:id")

export default routes