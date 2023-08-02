const { sequelize, DataTypes } = require('../database/db');

const cineA = sequelize.define('cineA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER, // or DataTypes.FLOAT, depending on your needs
        allowNull: false,
    },
    pelicula: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracion: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    fechaEstreno: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cantidadButacas: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    horario: {
        type: DataTypes.TIME, 
        allowNull: false,
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'CineA',
});

cineA.sync();

module.exports = cineA;
