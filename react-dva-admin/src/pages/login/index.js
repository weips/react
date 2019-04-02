import React, { Component } from 'react'
import { connect } from 'dva'
import { Form, Icon, Input, Button } from 'antd'
import './index.less'
const { Item } = Form
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
}
@connect(state => state.login)
@Form.create()
export default class Login extends Component{
  switchLoginStatus = (e) => {
    e.preventDefault()
    this.props.dispatch({type: 'login/switchLoginStatus'})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let type = this.props.isLogin ? 'login/signin' : 'login/login'
    this.props.form.validateFields((err, values) => {
      if (err) return false
      this.props.dispatch({type, payload: values})
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const { isLogin } = this.props
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Item label="用户名" {...formItemLayout}>
            {
              getFieldDecorator('username', {
                rules: [
                  {required: true, message: '用户名不能为空'}
                ]
              })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}} placeholder="请输入用户名" />} />
              )
            }
          </Item>
          <Item label="密码" {...formItemLayout}>
            {
              getFieldDecorator('password', {
                rules: [
                  {required: true, message: '密码不能为空'}
                ]
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0, 0, 0, .25)'}} placeholder="请输入密码" />} />
              )
            }
          </Item>
          {
            isLogin && <Item label="手机号" {...formItemLayout}>
              {
                getFieldDecorator('phone', {
                  rules: [
                    {required: true, message: '手机号不能为空'}
                  ]
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}} placeholder="请输入手机号" />} />
                )
              }
            </Item>
          }
          {
            isLogin &&<Item label="邮箱" {...formItemLayout}>
              {
                getFieldDecorator('email', {
                  rules: [
                    {required: true, message: '用户名不能为空'},
                    {type: 'email', message: '邮箱格式不正确'}
                  ]
                })(
                  <Input prefix={<Icon type="mail" style={{color: 'rgba(0, 0, 0, .25)'}} placeholder="请输入用户名" />} />
                )
              }
            </Item>
          }
          {
            isLogin ? (<Item>
              <Button htmlType="submit" type="primary" style={{width: '100%'}}>注册</Button>
              已有账号，<a href="#" onClick={this.switchLoginStatus}>点击登录</a>
            </Item>) : (<Item>
              <Button htmlType="submit" type="primary" style={{width: '100%'}}>登录</Button>
              没有账号，<a href="#" onClick={this.switchLoginStatus}>点击注册</a>
            </Item>)
          }
        </Form>
      </div>
    )
  }
}