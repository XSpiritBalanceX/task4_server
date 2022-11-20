const sequelize=require('./db');
const {DataTypes}=require('sequelize');

const User=sequelize.define('user',{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, unique:true},
    email:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    data_reg:{type:DataTypes.STRING},
    data_log:{type:DataTypes.STRING}
});

module.exports={User};