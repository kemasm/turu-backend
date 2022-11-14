const {DataTypes} = require("sequelize")

const Room = (sequelize) => {
    return sequelize.define("Room" , {
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        default_price : {
            type : DataTypes.INTEGER(10),
            allowNull : true
        },
        description : {
            type : DataTypes.STRING,
            allowNull : true
        }
    })
}

module.exports = Room