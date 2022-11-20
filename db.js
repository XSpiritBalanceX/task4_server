const {Sequelize}=require('sequelize');

module.exports=new Sequelize(
    'railway' || process.env.DB_NAME,
     'postgres' || process.env.DB_USER,
     'pfMYfubSfOdqlXfWZAO7' || process.env.DB_PASSWORD,
    {
        dialect:'postgres',
        host:"containers-us-west-137.railway.app" || process.env.DB_HOST,
        port: 7845 || process.env.DB_PORT
    }
)