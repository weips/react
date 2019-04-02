const express = require('express')
let router = express.Router()
const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  email: String
})
let User = mongoose.model('User', userSchema)
router.post('/signin', async (req, res) => {
  const { phone, username } = req.body
  let newPerson = new User(req.body)
  try {
    let doc = await User.findOne({phone, username})
    if (doc) {
      res.send({
        code: 'N',
        body: '',
        message: '用户已存在'
      })
    } else {
      let body = await newPerson.save()
      res.send({
        code: 'Y',
        message: '注册成功',
        body
      })
    }
  } catch (err) {
    res.send({
      code: 'N',
      body: '',
      message: err.message
    })
  }
})
router.post('/login', async (req, res) => {
  const {username, password} = req.body
  const doc = await User.findOne({username, password})
  if (doc) {
    res.send({
      code: 'Y',
      message: '登录成功',
      body: ''
    })
  } else {
    res.send({
      code: 'N',
      body: '用户名或密码错误'
    })
  }
})

module.exports = router