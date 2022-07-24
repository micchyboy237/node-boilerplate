const {Model} = require('sequelize');
const {Address} = require('.');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {}

  Contact.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Contact',
      tableName: 'contacts',
    },
  );

  Contact.Address = Contact.hasOne(Address);

  return Contact;
};
