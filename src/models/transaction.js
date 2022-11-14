const {DataTypes} = require("sequelize")

const Transaction = (sequelize) => {
    return sequelize.define("Transaction", {
        payment_proof : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
}

module.exports = Transaction