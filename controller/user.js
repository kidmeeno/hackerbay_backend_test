var tokenModule = require('../middleware/Tokendep');

class userLogin{
    signin (req,res, next){
        var data = {
            username: req.body.username,
            password:req.body.password
        }
        if(data.username ==''||  data.password ==''){
            res.json({'message':'Sorry you cant submit empty field' })  
        }else{
            tokenModule.createtoken(data).then(token =>{
                if(token == null){
                    res.json({message:' login failed'})
                }else{
                    res.json({message:'Login Successful', data:token  })
                }
            }) 
        }
       
     }  
}

module.exports = new userLogin();