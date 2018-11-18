module.exports = (sequelize, DataTypes) => {
    const accounts = sequelize.define("accounts", {
      username: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    });
  
    // accounts.associate = function(models) {
    //   models.accounts.hasOne(models.artists, {
    //     foreignKey: "accountId"
    //   });
    // };
  
    return accounts;
  };