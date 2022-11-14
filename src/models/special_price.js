const {DataTypes} = require("sequelize")

const SpecialPrice = (sequelize) => {
    return sequelize.define("SpecialPrice" , {
        type : {
            type : DataTypes.STRING,
            alloNull : true
        },
        discount : {
            type : DataTypes.INTEGER(10),
            allowNull : true
        },
        start_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        end_date : {
            type : DataTypes.DATE,
            allowNull : false
        }
    })
}

module.exports = SpecialPrice