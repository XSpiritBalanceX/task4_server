const {Sequelize}=require('sequelize');

module.exports=new Sequelize(
    process.env.port,
    process.env.dbname,
    process.env.dbuser,
    process.env.dbpassword,
    {
        dialect:'postgres',
        host:process.env.dbhost || "localhost",
        port:process.env.dbport,
    }
)