const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const PaymentMethod = sequelize.define('PaymentMethod', {
  id: {
    type: DataTypes.BIGINT, 
    primaryKey: true,
    autoIncrement: true, 
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiry: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cardnumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: { 
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  tableName: 'payment_methods',
  timestamps: false,
});

module.exports = PaymentMethod;
