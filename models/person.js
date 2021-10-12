import _sequelize from "sequelize";
import { sequelize } from "../startup/database.js";

const { DataTypes, Model } = _sequelize;

export class Person extends Model {};

Person.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    otherName: {
        type: DataTypes.STRING
    }
},
{
 sequelize,
 tableName: "person",
 freezeTableName: true
})

