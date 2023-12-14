const {UserRegisterError} = require("../error/error");
const {createUser ,getUserinfo} = require('../service/user.service')

const jwt = require('jsonwebtoken')//引入jwt
class UserController {
    // 注册
    async userRegister(ctx,next) {

        try {
            const {username,password} = ctx.request.body
            const res = await createUser(username,password)//调用createUser方法传入参数

            ctx.body={
                code:200,
                message:'注册成功',
                result:res
            }
        }catch (err) {
            console.log(err,'12312321')
            ctx.app.emit('error',UserRegisterError,ctx)
        }
    }

    // 登陆

    async userLogin(ctx,next) {
        try{
            const {username} = ctx.request.body;
            const {password,...res} = await getUserinfo({username})//把密码排除掉不返回
            ctx.body = {
                code:0,
                message:"登录成功",
                result:{
                    token:jwt.sign(res,'fasfasf',{expiresIn:'1d'})
                }
            }
        }catch (err) {
            console.log(err)
        }
    }
    //查询用户信息
    async getInfo(ctx,next) {
        try {
            const {id} = ctx.state.user;//因为token里面加入了我们的个人信息所以我们可以解构出我们的id
            const res = await getUserinfo({id})
            ctx.body = {
                code:0,
                message:'查询成功',
                result:res
            }
        }catch (err) {
            console.log(err)
        }
    }
}
module.exports = new UserController()
