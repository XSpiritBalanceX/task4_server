const {Router}=require('express');
const router=new Router();
const userRouter=require('./userRoute');
const authRouter=require('./authRout');

router.use('/table', userRouter)
router.use('/user', authRouter)

module.exports=router;