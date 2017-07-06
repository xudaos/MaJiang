const Koa = require('koa')
const mysql = require('mysql')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const response_format = require('./middlewares/response_format')
const cors = require('./middlewares/cors')

const index = require('./routes/index')
const api = require('./routes/api')

const app = new Koa()

app.pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'root123',
  database: 'wxdb'
})

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(cors)
app.use(response_format('^/api'))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(api.routes(), api.allowedMethods())

module.exports = app
