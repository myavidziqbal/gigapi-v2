"use strict";

module.exports = (sequelize, DataTypes) => {
    var gigapplied = sequelize.define("gigapplied", {

    date: {
        type: DataTypes.DATE(),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    artistsId: {
        type: DataTypes.INTEGER(),
        unique: true,
        references: {
            model: "artists",
            key: "id"
        } 
    },
    gigcreatedId: {
        type: DataTypes.INTEGER(),
        unique: true,
        references: {
            model: "gigcreatedId",
            key: "id"
        } 
    }
  });

  Task.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Task.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  },
gigapplied.associate = models => {
    console.log(models);
    gigapplied.belongsToMany(models.gigcreatedId, {
        onDelete: "CASCADE",
        as: "gigcreatedId",
        foreignKey: {
            allowNull: false
        }
    })
}


  return gigapplied;
};

//-------------fixed foreignKey-----------

// var gigapplied = sequelize.define('gigapplied', {/* ... */
//     date: {
//                 type: DataTypes.DATE(),
//                 allowNull: false
//             },
//             status: {
//                 type: DataTypes.STRING(255),
//                 allowNull: false
//             },
//             artistsId: {
//                 type: DataTypes.INTEGER(),
//                 unique: true,
//                 references: {
//                     model: "artists",
//                     key: "id"
//                 } 
//             },
//             gigcreatedId: {
//                 type: DataTypes.INTEGER(),
//                 unique: true,
//                 references: {
//                     model: "gigcreatedId",
//                     key: "id"
//                 } 
//             }
// })
// var artists = sequelize.define('artists', {/* ... */

// })
 
// // OK. Now things get more complicated (not really visible to the user :)).
// // First let's define a hasMany association
// gigapplied.hasMany(User, {as: 'Workers'})