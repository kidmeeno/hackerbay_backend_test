var authVerify = require('../middleware/Tokendep');

class auths{
    authRoute (req,res,next){
        var usertoken =  req.headers['usertoken'];
        if(usertoken){
            authVerify.verifytoken(usertoken).then(verified =>{
            next();
        }).catch(err =>{
            next(err);
        })
        }else{
            res.json({ message: "Token does not exist" });
        }
    }
}

module.exports = new auths();