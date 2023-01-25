const router = require('express').Router()
const controller = require('./controller')

router.get('/', controller.index)
router.get('/sign-up', controller.sign_up)
router.post('/sign-up', controller.sign_up_logic)
router.get('/sign-in', controller.sign_in)
router.post('/logout', controller.logout)
router.post('/index_sign-in', controller.index_sign_in)

module.exports = router