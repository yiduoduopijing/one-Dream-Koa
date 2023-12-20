const Card = require('../model/card.model')//引入user模型

class CardService{
    // async createCard(uid,avatar,userInfotype,username,postTop,status,createTime,content,type,media,address,readCount,collectionCount,isCollection,commentCount){
    //     return await Card.create({uid,avatar,userInfotype,username,postTop,status,createTime,content,type,media,address,readCount,collectionCount,isCollection,commentCount})//创建数据库条目 更多查询器参考https://www.sequelize.com.cn/core-concepts/model-querying-basics
    // }
    
    // //  登陆
    // async getUserinfo({username,id}){
    //     const whereOpt = { } ; // 创建一个对象，这个对象就是包涵了需要查询的条件
    //     id && Object.assign(whereOpt,{id}) // 合并对象，如果有这个参数的话就去进行查询，可以复用查询
    //     username && Object.assign(whereOpt,{username})
    //     const res = await Card.findOne({
    //         attributes:['id','username','password','createdAt','updatedAt',],
    //         where:whereOpt, // 查询条件
    //     })
    //     return res ? res.dataValues :false
    // }
}

module.exports = new CardService()
