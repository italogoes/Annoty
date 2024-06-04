import { Request, Response } from "express";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";

const secretKey = "ssljdlkasjdlkajsd"

class UserController {
  public async getUser(req: Request, res: Response) {
    try {
      const users = await UserModel.findAll()

      res.json(users)
    } catch (error) {
      res.status(400).json({ error: "Erro ao buscar usuários." })
    }
  }

  public async addUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      const checkExistingUser = await UserModel.findOne({ where: { email: email } })

      if (checkExistingUser) {
        return res.status(400).json({ message: "Usuário já existe." })
      }

      const user = await UserModel.create({
        name,
        email,
        password: hashedPassword
      })

      if (!user) {
        return res.status(402).json({ errors: ["Houve um erro ao cadastrar o usuário"] })
      }

      res.status(200).json({ message: "Usuário cadastrado com sucesso!", user })

    } catch (error) {
      res.status(400).json({ message: "Erro ao cadastrar usuário.", error })
    }
  }

  public async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ where: { email: email } })

    if (user && await bcrypt.compare(password, user.password)) {
      const token = Jwt.sign(
        { userId: user.id },
        secretKey,
        { expiresIn: "7d" }
      )

      res.json({ token })
    } else {
      res.status(402).json({ errors: ["Credenciais inválidas."] })
    }
  }
}

const User = new UserController()

export default User