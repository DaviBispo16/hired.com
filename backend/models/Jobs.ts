import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Jobs extends Model { }

Jobs.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataDeCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Jobs'
});

export default Jobs;