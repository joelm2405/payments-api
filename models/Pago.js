const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Pago = sequelize.define('Pago', {
  id: {
    type: DataTypes.BIGINT, 
    primaryKey: true,
    autoIncrement: true, 
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: { 
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  reserva: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'pagos',
  timestamps: false,
});

module.exports = Pago;
