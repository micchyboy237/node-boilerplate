module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define(
    'Contact',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      underscored: false,
      tableName: 'contacts',
    },
  );

  return contact;
};
