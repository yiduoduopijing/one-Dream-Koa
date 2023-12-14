const Koa = require('koa')
const logger = require('../logger')
const app = new Koa()
const koaBody = require('koa-body');
const cors = require('koa2-cors');

app.use(koaBody())
// 允许所有的跨域请求
app.use(cors());


// error handler


const router = require('../router/index')
app.use(router.routes()).use(router.allowedMethods());

const homePage = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");

// 首页
router.get("/", async (ctx) => {
  ctx.body = homePage;
});

// 更新计数
router.post("/api/count", async (ctx) => {
  const { request } = ctx;
  const { action } = request.body;
  if (action === "inc") {
    await Counter.create();
  } else if (action === "clear") {
    await Counter.destroy({
      truncate: true,
    });
  }

  ctx.body = {
    code: 0,
    data: await Counter.count(),
  };
});

// 获取计数
router.get("/api/count", async (ctx) => {
  const result = await Counter.count();

  ctx.body = {
    code: 0,
    data: result,
  };
});

// 小程序调用，获取微信 Open ID
router.get("/api/wx_openid", async (ctx) => {
  if (ctx.request.headers["x-wx-source"]) {
    ctx.body = ctx.request.headers["x-wx-openid"];
  }
});



app.on('error',(err,ctx) =>{//新增
    let status = 500
    switch(err.code){//这里可以判断你传进来的错误码，相应的改变返回的状态码，可以更好的知道发生了什么类型的错误，这里是一个例子，具体可以根据你前后端自己协调
        case '10001':
            status = 400
            break
        case '10002':
            status = 409
            break

        default :
            status = 500
    }
    ctx.status = status
    ctx.body = err
})

const _errorHandler = (err, req, res, next) => {
    logger.error(`${req.method} ${req.originalUrl}` + err.message)
    const errorMsg = err.message
    res.status(err.status || 500).json({
      code:-1,
      success:false,
      message:errorMsg,
      data:{}
    })  
  }

  app.use(_errorHandler)
module.exports = app
