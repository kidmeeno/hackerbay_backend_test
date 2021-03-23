var express = require('express');
var router = express.Router();
var userLogin = require('../controller/user');
var patchuser = require('../controller/userPatch');
var userthumbnail = require('../controller/userthumbnail');
var routemiddleware = require('../routesauth/auth')
router.post('/login',userLogin.signin);
router.patch('/patch',routemiddleware.authRoute, patchuser.patch);
router.get('/thumbnail',routemiddleware.authRoute, userthumbnail.generateThumbnail);

module.exports = router;
