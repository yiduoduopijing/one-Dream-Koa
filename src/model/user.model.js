const {DataTypes} = require('sequelize')

const seq = require('../db/sql')

//username,password 为表的字段

const User = seq.define('baobei_user',{
    username:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:true,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    password:{
        type:DataTypes.CHAR(64),
        allowNull: false,
        comment: "用户密码"
    }
})

User.sync()//模型同步

module.exports = User