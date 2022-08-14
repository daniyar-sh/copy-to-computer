import { Button, Form, Input } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions'

const SignIn = (props) => {
    const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
    props.authActions.signIn(values, navigate)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  console.log(props.isAuth)
  return (
    
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

      
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button  type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
      <Link to='/signup'>Регитрация</Link>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  isAuth: state.authReducer.isAuth
})
const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);