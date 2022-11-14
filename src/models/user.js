const {DataTypes} = require("sequelize") 

const User = (sequelize) => {
    return sequelize.define("Users", {
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email :  {
            type : DataTypes.STRING,
            allowNull : false
        },
        phone_number : {
            type : DataTypes.STRING,
            allowNull :false
        },
        gender : {
            type : DataTypes.STRING,
            allowNull : true
        },
        birthdate : {
            type : DataTypes.DATE,
            allowNull : false
        },
        profile_pic : {
            type : DataTypes.STRING,
            allowNull : true
        },
        is_verified : {
            type : DataTypes.SMALLINT(5),
            allowNull : false
        },
        reset_password_token : {
            type : DataTypes.STRING,
            allowNull : true
        },
        reset_password_expires : {
            type : DataTypes.TIMESTAMP
        }
    })
}

module.exports = User