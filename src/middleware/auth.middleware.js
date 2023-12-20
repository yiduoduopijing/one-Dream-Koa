const jwt = require('jsonwebtoken')

const {TokenExpiredError,JsonWebTokenError} = require('../error/error')

const auth = async (ctx,next)=> {
    const appSecret= 'b69c9a06fb8d41e13be29621b1eaae49'
    try {
        const {token} = ctx.request.header
        ctx.state.user = jwt.verify(token,appSecret)//token验证，如果合法则存在变量ctx.state.user中
    }catch(err){
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token已经过期', err)
                return ctx.app.emit('error', TokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效的token', err)
                return ctx.app.emit('error', JsonWebTokenError, ctx)
        }
    }
    await next()
}

module.exports = {
    auth
}