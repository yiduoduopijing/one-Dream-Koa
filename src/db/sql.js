const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require('../config/config.dotenv')

// 从环境变量中读取数据库配置
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;

const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", MYSQL_USERNAME, MYSQL_PASSWORD, {
    host,
    port,
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  });

  sequelize.authenticate().then(() => {
    console.log("和你的数据连接成功了！")
}).catch((err) => {
    console.log("数据库连接失败",err)
})


// 定义数据模型
const Counter = sequelize.define("Counter", {
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

  // 数据库初始化方法
async function init() {
    await Counter.sync({ alter: true });
  }
// 导出初始化方法和模型
module.exports = sequelize