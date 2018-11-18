"use strict";

module.exports = (sequelize, DataTypes) => {
  var artists = sequelize.define("artists", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("solo", "group"),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    video: {
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

  artists.associate = models => {
    console.log(models);
    artists.belongsTo(models.accounts, {
      onDelete: "CASCADE",
      as: "account",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return artists;
};