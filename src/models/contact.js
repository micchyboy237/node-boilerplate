module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define(
    'Contact',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      underscored: false,
      tableName: 'contacts',
    },
  );

  return contact;
};
