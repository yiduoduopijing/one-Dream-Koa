const Router = require('@koa/router');
const router = new Router({prefix:'/user'})//配置接口统一模块路径
const {userRegister,getInfo} = require('../controller/user.controller')
const {verifyLogin} = require('../middleware/user.middleware')

const {auth} = require("../middleware/auth.middleware");

router.post('/register',userRegister)


// router.post('/login',userLogin)

// router.get('/getinfo',auth,getInfo)//token验证中间件，获取个人信息控制器

module.exports = router
