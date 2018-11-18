"use strict";

module.exports = (sequelize, DataTypes) => {
  var hosts = sequelize.define("hosts", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountId: {
      type: DataTypes.INTEGER(),
      unique: true,
      references: {
        model: "accounts",
        key: "id"
      }
    }
  });

  hosts.associate = models => {
    console.log(models);
    hosts.belongsTo(models.accounts, {
      onDelete: "CASCADE",
      as: "account",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return hosts;
};