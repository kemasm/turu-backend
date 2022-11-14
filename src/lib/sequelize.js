const {Sequelize} = require("sequelize")
const dbConfig = require("../configs")

const sequelize = new Sequelize({
    username : dbConfig.MYSQL_USER,
    password : dbConfig.MYSQL_PASSWORD,
    database : dbConfig.MYSQL_DB_NAME,
    port : dbConfig.MYSQL_PORT,
    dialect : "mysql" //dialect : adalah database yg kita pakai
})

const User = require("../models/user")(sequelize)
const Verification = require("../models/verification")(sequelize)
const Reservation = require("../models/reservation")(sequelize)
const Transaction = require("../models/transaction")(sequelize)
const Room = require("../models/room")(sequelize)
const SpecialPrice = require("../models/special_price")(sequelize)
const Review = require("../models/review")(sequelize)
const Property = require("../models/property")(sequelize)
const Tenant = require("../models/tenant")(sequelize)
const Category = require("../models/category")(sequelize)
const Bank = require("../models/bank")


module.exports = {
    sequelize,
    User,
    Verification,
    Reservation,
    Transaction,
    Room,
    SpecialPrice,
    Review,
    Property,
    Tenant,
    Category,
    Bank
}