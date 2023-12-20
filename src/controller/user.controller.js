const { UserRegisterError } = require("../error/error");
const { createUser, getUserinfo } = require('../service/user.service')

const jwt = require('jsonwebtoken')//引入jwt
class UserController {
    // 注册
    async userRegister(ctx, next) {

        try {
            const { openid, nickName, avatarUrl } = ctx.request.body
            const userInfo = await getUserinfo(openid)

            const secret = 'b69c9a06fb8d41e13be29621b1eaae49'
            if (!userInfo) {
                await createUser(openid,nickName,avatarUrl)
            }

            const token = jwt.sign({ openid }, secret, { expiresIn: '3d' })
            ctx.body = {
                code: 200,
                message: '登录注册成功',
                data: {
                    userInfo,
                    token
                }
            }
        } catch (err) {
            console.log(err, 'err');
            ctx.app.emit('error', UserRegisterError, ctx)
        }
    }


    // //查询用户信息
    // async getInfo(ctx,next) {
    //     try {
    //         const {id} = ctx.state.user;//因为token里面加入了我们的个人信息所以我们可以解构出我们的id
    //         const res = await getUserinfo({id})
    //         ctx.body = {
    //             code:0,
    //             message:'查询成功',
    //             result:res
    //         }
    //     }catch (err) {
    //         console.log(err)
    //     }
    // }
}
module.exports = new UserController()
