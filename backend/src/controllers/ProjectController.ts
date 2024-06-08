import { Request, Response } from "express";
import ProjectModel from "../models/ProjectModel";
import { IGetUserAuthInfoRequest } from "../interfaces/IGetUserAuthInfoRequest";

class ProjectController {
    public async getProjects(req: IGetUserAuthInfoRequest, res: Response){
        // ver
        // https://dev.to/jhonywalkeer/nodejs-limitacao-de-taxa-de-api-6n3
        const projects = await ProjectModel.findAll({ where: {userId: req.userId}})

        res.status(200).json(projects)
    }

    public async addProject(req: IGetUserAuthInfoRequest, res: Response) {
        const { title } = req.body
        
        try {
            // const checkExistingProject = await ProjectModel.findOne({where: { title: title}})

            // if (checkExistingProject) {
            //     return res.status(402).json({ erro: "Já existe um projeto cadastrado com esse nome." })
            // }

            const project = await ProjectModel.create({
                userId: req.userId,
                title
            })

            res.status(200).json({ message: "Projeto cadastrado com sucesso!", project })
        } catch (error) {
            res.status(400).json({ erro: "Houve um erro ao cadastrar o projeto, tente novamente mais tarde.", error })
        }
    }
}

const Project = new ProjectController()

export default Project