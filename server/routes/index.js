const router = require('express').Router()
const user = require('./user')

router.use('/user', user);
// router.use('/friend', require('./friend'));
// router.use('/post', require('./post'));
// router.use('/usercomment', require('./usercomment'));
// router.use('/like', require('./like'));
// router.use('/message', require('./message'));
// router.use('/event', require('./event'))
// router.use('/photo', require('./photo'))

module.exports = router