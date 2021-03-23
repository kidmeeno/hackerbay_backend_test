var webToken = require('jsonwebtoken');
var tokenSecret = process.env.tokenCode;

class TokenDependency{
    createtoken(data){
        return new Promise((resolve, reject)=>{
            webToken.sign(data,tokenSecret ,{expiresIn: '24hrs'}, function(err, tokencreated){
                if(err){
                    reject(err);
                }else{
                    resolve(tokencreated);
                }
            });
    
        });
    } 
    
     verifytoken (data){
        return new Promise((resolve, reject)=>{
            webToken.verify(data.replace("bearer ", ""), tokenSecret, function(err, tokengotten){
                if(err){
                    reject(err);
                }else{
                    resolve(tokengotten);
                }
            });
        });
    }
}
module.exports = new TokenDependency();