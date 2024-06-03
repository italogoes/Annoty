import { Request, Response } from "express";
import bcrypt from "bcrypt"
import UserModel from "../models/UserModel";

class UserController {
  public async getUser(req: Request, res: Response) {
    try {
      const users = await UserModel.findAll()

      res.json(users)
    } catch (error) {
      res.status(400).json({ error: "Erro ao buscar usuários."})
    }
  }

  public async addUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    
    try {
      const checkExistingUser = await UserModel.findOne({where: {email: email}})

      if (checkExistingUser) {
        return res.status(400).json({ message: "Usuário já existe."})
      }

      const user = await UserModel.create({
        name,
        email,
        password: hashedPassword
      })

      res.status(200).json({message: "Usuário cadastrado com sucesso!", user})

    } catch (error) {
      res.status(400).json({ message: "Erro ao cadastrar usuário.", error})
    }
  }
}

const User = new UserController()

export default User