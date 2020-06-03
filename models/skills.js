// Create Skills model for sequelize
module.exports = function (sequelize, DataTypes) {
    const Skills = sequelize.define("Skills", {
        comm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        collab: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tech: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Skills
};


href="{string of address.com}"
title="{proj name}"
image="/../{src image file}"
