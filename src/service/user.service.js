const User = require('../model/user.model')//引入user模型

class UserService{
    async createUser(openid,nickName,avatarUrl){
        return await User.create({openid,nickName,avatarUrl})//创建数据库条目 更多查询器参考https://www.sequelize.com.cn/core-concepts/model-querying-basics
    }

    async getUserinfo(openid){
        return await User.findOne({ where: { openid }})
    }
}

module.exports = new UserService()
