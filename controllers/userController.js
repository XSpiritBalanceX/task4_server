const {User}=require('../descriprionDB');

class UserController{

    async getTable(req, res, next){
        try{ 
            let users=await User.findAll({attributes:['id']});
            return res.json(users);
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        }
    }

    async deleteUser (req, res){    
        try{ 
            let arrDeleteUser=req.body.data;
            await User.destroy({where:{id:arrDeleteUser}});            
            return res.json({message:`Operation complited successfully`}); 
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        }
    } 
}

module.exports=new UserController();