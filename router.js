const express = require('express')
//加载所有的处理函数
const index = require('./controllers/index')
const topic = require('./controllers/topic')
const user  = require('./controllers/user')

const router = express.Router()

//用户路由
  router
  	.get('/',index.showIndex)
//用户首页
  router	
  	.get('/signin',user.showSignin)
  	.post('/signin',user.signin )
  	.get('/signup',user.showSignup )
  	.post('/signup',user.signup)
  	.post('/signout',user.signout)
//话题相关
router  	
  	.get('/topic/create',topic.showCreate)
  	.post('/topic/create',topic.create)
  	.get('/topic/:topicID',topic.show)
  	.get('/topic/:topicID/edit',topic.showEdit)
  	.post('/topic/:topicID/edit',topic.showIndex)
  	.post('/topic/:topicID/delete',topic.delete)

  	//3.导出路由对象
  module.exports = router