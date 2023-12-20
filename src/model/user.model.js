const { DataTypes } = require('sequelize')

const seq = require('../db/sql')

//username,password 为表的字段

const User = seq.define('user', {
    openid: { //微信用户的唯一标识，是用户的登录凭证。
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    session_key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    unionid: { //  微信用户的联合标识，一般在多个应用之间共享。
        type: DataTypes.STRING,
        unique: true,
    },
    nickname: { // 用户昵称。
        type: DataTypes.STRING,
    },
    avatarUrl: { //  用户头像地址。
        type: DataTypes.STRING,
    },
    gender: { //用户性别，可能是数字表示（0表示未知，1表示男性，2表示女性）。
        type: DataTypes.INTEGER,
    },
    province: { // 用户所在省份。
        type: DataTypes.STRING,
    },
    city: { // 用户所在城市。
        type: DataTypes.STRING,
    }
},{
    timestamps: true, // 自动生成 createdAt 和 updatedAt 字段
})

User.sync().then(() => {
    console.log('模型同步成功');
  })
  .catch((error) => {
    console.error('模型同步失败', error);
  });

module.exports = User