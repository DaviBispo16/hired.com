import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
const { zonedTimeToUtc } = require("date-fns-tz");

class Users extends Model { }

Users.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    dataDeCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: () => {
            const timezone = 'America/Sao_Paulo';
            return zonedTimeToUtc(new Date(), timezone);
        }
    },

}, {
    sequelize,
    modelName: 'Users'
});