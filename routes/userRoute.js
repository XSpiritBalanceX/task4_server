const {Router}=require('express');
const userRouter=new Router();
const userController=require('../controllers/userController');

userRouter.get('/', userController.getTable);

userRouter.put('/delete/', userController.deleteUser)

module.exports=userRouter;