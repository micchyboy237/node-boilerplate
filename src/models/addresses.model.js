const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {}
  Address.init(
    {
      type: DataTypes.STRING,
      line1: DataTypes.STRING,
      line2: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Address',
      tableName: 'addresses',
    },
  );
  return Address;
};
