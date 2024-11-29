import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

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
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataDeCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
}, {
    sequelize,
    modelName: 'Users'
});

export default Users;