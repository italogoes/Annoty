import { DataTypes } from "sequelize";
import sequelize from "../config/Connection";

const UserModel = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelize.sync({ force: false })

export default UserModel