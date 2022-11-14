const {DataTypes} = require("sequelize")

const Verification = (sequelize) => {
    return sequelize.define("Verfication" , {
        verfication_code : {
            type : DataTypes.STRING,
            allowNull : false
        },
        is_active : {
            type : DataTypes.SMALLINT(5),
            allowNull : false
        },
        expiration_date : {
            type : DataTypes.DATE,
            allowNull : false
        }
    })
}

module.exports = Verification