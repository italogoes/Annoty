import { DataTypes, Model } from "sequelize";
import sequelize from "../config/Connection";
import { IUser } from "../interfaces/UserInterface";

class UserModel extends Model<IUser> implements IUser {
    public id!: number
    public name!: string
    public email!: string
    public password!: string;
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'users'
    }
)

sequelize.sync({ force: false })

export default UserModel