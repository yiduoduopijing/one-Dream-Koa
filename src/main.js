// const {PORT} = require('./config/config.dotenv')
const port = process.env.PORT || 80;

const app = require('./app/index')//导入app文件
app.listen(port,()=>{
    console.log(`启动的服务的端口是http://localhost:${port}`)
})
