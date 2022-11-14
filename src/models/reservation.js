const {DataTypes} = require("sequelize") 

const Reservation = (sequelize) => {
    return sequelize.define("Reservation", {
        start_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        end_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        status : {
            type : DataTypes.SMALLINT(5),
            allowNull : false
        },
        guest_count : {
            type : DataTypes.INTEGER(10),
            allowNull : false
        }
    })
}

module.exports = Reservation