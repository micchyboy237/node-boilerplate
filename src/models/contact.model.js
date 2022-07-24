const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      Contact.Address = Contact.belongsTo(models.Address, {
        as: 'Address',
        foreignKey: 'addressId',
      });
    }
  }

  Contact.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      addressId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Contact',
      tableName: 'contacts',
    },
  );

  return Contact;
};
