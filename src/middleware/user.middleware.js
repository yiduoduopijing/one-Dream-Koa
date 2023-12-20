const {getUserinfo} = require('../service/user.service')
const {userPasswordError, userParameterError,userLoginError} = require("../error/error");
const jwt = require('jsonwebtoken')
const axios = require('axios');
const verifyLogin = async (ctx,next) => {//验证密码中间件
    try {
        const { code, iv, encryptedData, phone } = ctx.request.body
        if (!code) {
            throw '-1'
        }
        const appid = 'wxf5d1d75018ca79d0' // 小程序appId
        const secret = 'b69c9a06fb8d41e13be29621b1eaae49' // 小程序密钥
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
        const response = await axios.get(url);
        const { session_key, openid } = JSON.parse(response.data)
         // 数据库查询
        const userinfo = await getUserinfo(openid)
        if (userinfo) { // 用户存在返回token
            const token = jwt.sign({
              id: userInfo.userId,
              phone: userInfo.phone,
              openid: userInfo.openid
            }, 'user_token', { expiresIn: process.env.NODE_ENV != 'development' ? '7d' : '365d' }) // 线下环境365天
            resolve(token)
          } else { // 用户不存在返回空
            resolve(false)
          }

    }catch (err) {
        console.log(err);
       if(err === '-1'){
        ctx.app.emit('error',userParameterError,ctx)
       }else {
        ctx.app.emit('error',userLoginError,ctx)
       }
       return 
   
    }
await next();//进入下一个中间件
}

module.exports= {
    verifyLogin
}
