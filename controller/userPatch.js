var jsonPatch = require('jsonpatch');

class userpatch{
    patch(req,res){
        var userDoc = typeof(req.body.userDoc)=="string" ? JSON.parse(req.body.userDoc) : req.body.userDoc ;
        var patch = typeof(req.body.patch)=="string" ? JSON.parse(req.body.patch) : req.body.patch;
        userDoc = jsonPatch.apply_patch(userDoc,patch);
        res.json(userDoc);
    }
}

module.exports = new userpatch();