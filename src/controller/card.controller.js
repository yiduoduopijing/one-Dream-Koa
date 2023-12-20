const {createCard} = require('../service/card.service')
const {CardArgumentsError} = require("../error/error");

class CardController {
    //查询卡片信息
    async cardGet(ctx,next) {
        try {
            const {id} = ctx.state.user;//因为token里面加入了我们的个人信息所以我们可以解构出我们的id
            const res = await createCard({id})
            ctx.body = {
                code:0,
                message:'查询成功',
                result:res
            }
        }catch (err) {
            console.log(err)
        }
    }

    async addCard (ctx,next){
        try {
            const {uid,avatar,userInfotype,username,postTop,status,createTime,content,type,media,address,readCount,collectionCount,isCollection,commentCount} = ctx.request.body
            const res = await createCard(uid,avatar,userInfotype,username,postTop,status,createTime,content,type,media,address,readCount,collectionCount,isCollection,commentCount)//调用createCard方法传入参数

            ctx.body={
                code:200,
                message:'注册成功',
                result:''
            }
        }catch (err) {
            ctx.app.emit('error',CardArgumentsError,ctx)
        }
    }

}
module.exports = new CardController()

