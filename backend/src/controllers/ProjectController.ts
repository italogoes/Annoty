import { Request, Response } from "express";

class ProjectController {
    public async getProjects(req: Request, res: Response){
        // ver amanha
        // https://dev.to/jhonywalkeer/nodejs-limitacao-de-taxa-de-api-6n3
    }
}

const Project = new ProjectController()

export default Project