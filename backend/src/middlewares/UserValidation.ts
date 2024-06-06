import { body } from "express-validator"

const userCreateValidator = () => {
    return [
        body("name").isString().withMessage("Nome é obrigatório."),
        body("email").isEmail().withMessage("E-mail é obrigatório."),
        body("password").isString().withMessage("A senha é obrigatória.")
    ]
}

module.exports = {
    userCreateValidator
}