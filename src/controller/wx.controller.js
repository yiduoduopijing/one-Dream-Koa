const { WxError,userParameterError } = require("../error/error");
const jwt = require('jsonwebtoken')//引入jwt
// const { getUserinfo, createUser } = require('../service/user.service')

const axios = require('axios');
class WxController {


    async wxlogin(ctx, next) {
        try {
            const { code } = ctx.request.body
            if (!code) {
                throw userParameterError
            }
            const { appid, secret } = {
                appid: 'wxf5d1d75018ca79d0',
                secret: 'b69c9a06fb8d41e13be29621b1eaae49'
            }
            const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
            const result = await axios.get(url)

            const { openid, session_key } = result.data

            if (!openid || !session_key) {
                throw WxError
            }else {
                ctx.body = {
                    code: 200,
                    success: true,
                    data: {
                        openid
                    }
                }
            }

            // const userinfo = await getUserinfo(openid)
            // if (!userinfo) {
            //     await createUser(openid, session_key)
            // }
            // const token = jwt.sign({ openid, session_key }, secret, { expiresIn: '3d' })
            // userinfo.session_key = undefined
 

        } catch (err) {
            console.log(err)
            if (err.code == '-1') {
                ctx.app.emit('error', err, ctx)
            }
        }
    }

}
module.exports = new WxController()

