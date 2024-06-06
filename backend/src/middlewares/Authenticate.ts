import { NextFunction, Request, Response } from "express"
import Jwt from "jsonwebtoken"

const secretKey = "ssljdlkasjdlkajsd"

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]

    if(!token) {
        return res.status(403).json({ error: "Token não fornecido!"})
    }

    try {
        const decoded = Jwt.verify(token.split(" ")[1], secretKey)
        
        req.userId = decoded.userId
        next()
    } catch (error) {
        res.status(400).json({ error: "Token inválido"})
    }
}

export default authenticate