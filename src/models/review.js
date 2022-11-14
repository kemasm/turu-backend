const {DataTypes} = require("sequelize")

const Review = (sequelize) => {
    return sequelize.define("Review", {
        comment : {
            type : DataTypes.STRING,
            allowNull : true
        }
    })
}

module.exports = Review