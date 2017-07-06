const user_service = require('../services/user_service')

//获取用户
exports.getUser = async (ctx, next) => {
  const userList = await user_service.findAllUser(ctx)
  ctx.body.info.userList = userList
  ctx.body.success = true
}

//用户注册
exports.registerUser = async (ctx, next) => {
  console.log('registerUser', ctx.request.body)
  ctx.body.success = true
}
