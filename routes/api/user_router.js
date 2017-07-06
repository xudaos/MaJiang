const router = require('koa-router')()
const user_controller = require('../../controllers/user_controller')

router.prefix('/users')

router.get('/getUser', user_controller.getUser)
router.get('/registerUser', user_controller.registerUser)

module.exports = router
