const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      Contact.Address = Contact.hasOne(models.Address);
    }
  }

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

  return Contact;
};
