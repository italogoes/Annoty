import { DataTypes, Model } from "sequelize";
import { IProject } from "../interfaces/ProjectInterface";
import sequelize from "../config/Connection";


class ProjectModel extends Model<IProject> implements IProject {
    public id!: number
    public userId!: number;
    public title!: string;
}

ProjectModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'projects'
    }
)

sequelize.sync({ force: false })

export default ProjectModel