const Router = require('@koa/router');
const router = new Router({prefix:'/user'})//配置接口统一模块路径
const {userRegister,userLogin,getInfo} = require('../controller/user.controller')
const {verifyLogin} = require('../middleware/user.middleware')

const {auth} = require("../middleware/auth.middleware");
router.get('/add',(ctx,next) => {
    ctx.body = "路由配置成功了"
})

router.post('/register',userRegister)


router.post('/login',verifyLogin,userLogin)

router.get('/getinfo',auth,getInfo)//token验证中间件，获取个人信息控制器

module.exports = router
