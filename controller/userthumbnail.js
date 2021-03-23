var userThumbnails = require('node-thumbnail').thumb;
var fs = require('fs');
var path = require('path');

class userThumbnail{
    generateThumbnail(req,res){
        var file = path.basename(req.body.source)
        file = file.substr(0,file.lastIndexOf("."));
        var ext = path.extname(req.body.source);
        var data = {
            source:req.body.source,
            destination: 'userfile',
            suffix:new Date(),
            width:50,
            height:50,
            concurrency:4
      }
     if(fs.existsSync(data.source)){
        userThumbnails(data ,function (files, err, stdout, stderr){
           res.json({file:`userfile/`+file+data.suffix+ext})
       }).catch(err =>{
           res.json({ message:'File error'});
       })  
     }else{
         res.json("File not existing ");
     }
    }
}

module.exports = new userThumbnail();
