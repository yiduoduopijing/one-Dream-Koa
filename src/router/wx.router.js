const Router = require('@koa/router');
const router = new Router({prefix:'/wx'})//配置接口统一模块路径

const { wxlogin } = require('../controller/wx.controller')
// const { verifyLogin } = require('../middleware/user.middleware.js')

router.post('/wxlogin',wxlogin)


module.exports = router