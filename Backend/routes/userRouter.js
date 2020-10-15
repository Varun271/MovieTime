const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post("/user",userController.addUser);
router.post("/checkLogin",userController.checkLogin);
router.get('/currectUser',userController.getCurrentUser);
router.get('/logout',userController.logout);
router.post('/updateUser',userController.updateUser);


module.exports = router