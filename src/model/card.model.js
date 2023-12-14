const {DataTypes} = require('sequelize')

const seq = require('../db/sql')

//username,password 为表的字段

const Card = seq.define('card',{
    uid:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    avatar:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    type:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    username:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    postTop:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    status:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    createTime:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    content:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    type:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    media:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:true,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    address:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    readCount:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    collectionCount:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    isCollection:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    commentCount:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:false,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
})

Card.sync()//模型同步

module.exports = Card



/**
 * 
 * {
          id: 1,
          uid: "",
          userInfo: {
            avatar: "https://cdn.uviewui.com/uview/album/1.jpg ",
            userInfotype: 1,
            username: "朵朵"
          },
          postTop: 3,
          status: 1,
          createTime: "123",
          content: "超市摊，缺中信",
          type: 1,
          media: [
            "https://cdn.uviewui.com/uview/album/1.jpg",
            "https://cdn.uviewui.com/uview/album/2.jpg",
            "https://cdn.uviewui.com/uview/album/3.jpg",
            "https://cdn.uviewui.com/uview/album/4.jpg"
          ],
          address: "北京市",
          readCount: "123",
          collectionCount: 0,
          isCollection: false,
          commentCount: 2
        },
 */