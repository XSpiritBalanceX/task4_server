const {Sequelize}=require('sequelize');

module.exports=new Sequelize(
    process.env.DB_NAME || 'railway',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'pfMYfubSfOdqlXfWZAO7',
    {
        dialect:'postgres',
        host:process.env.DB_HOST || "containers-us-west-137.railway.app",
        port:process.env.DB_PORT || 7845,
    }
)