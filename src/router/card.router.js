const Router = require('@koa/router');
const router = new Router({prefix:'/card'})//配置接口统一模块路径
const {cardGet,addCard} = require('../controller/card.controller')

const {auth} = require("../middleware/auth.middleware");



router.post('/addCard',addCard)

router.get('/list',auth, cardGet)

module.exports = router