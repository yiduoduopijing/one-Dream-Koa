module.exports = {
    UserRegisterError:{
        code:'10001',
        message:'请检查是否账户名称重复',
        result:''
    },
    userPasswordError:{
        code:'10101',
        message:'密码不正确',
        result:''
    },
    userIsundefined:{
        code:'10101',
        message:'用户不正确',
        result:''
    },
    userLoginError:{
        code:'10101',
        message:'登陆失败，请联系管理员',
        result:''
    },
    TokenExpiredError:{
        code:'10010',
        message:'token已过期',
        result:''
    },
    JsonWebTokenError:{
        code:'10010',
        message:'无效的token',
        result:''
    },
    CardArgumentsError:{
        code:'10010',
        message:'参数错误',
        result:''
    },
    WxError:{
        code:'10101',
        message:'微信登录失败',
        result:''
    },
    userParameterError:{
        code:'-1',
        message:'code参数错误',
        result:''
    }
}
