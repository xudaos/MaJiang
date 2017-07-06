const response_format = (pattern) => {
  return async (ctx, next) => {
    const reg = new RegExp(pattern)
    if (reg.test(ctx.originalUrl)) {
      ctx.body = {
        success: false,
        info: {}
      }
    }
    await next()
  }
}

module.exports = response_format
