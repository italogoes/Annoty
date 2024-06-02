import { DataType, Model } from "sequelize";
import sequelize from "sequelize";

interface IUser extends Model {
    name: string
    email: string
    password: string
}

class User {
    
}