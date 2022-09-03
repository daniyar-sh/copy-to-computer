import {Form, Button, Input, Row, Col, PageHeader} from 'antd'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions'
import { useNavigate} from 'react-router';
import { Link } from 'react-router-dom'


function Signin(props) {
    const navigate = useNavigate()
    const onFinish = (values) => {
        props.authActions.signIn(values, navigate)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(props.isAuth)
    return (
      <PageHeader
      className="site-page-header">
        <Row gutter={[16, 16]}>
          <Col span={12} offset={6}>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
                }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input />
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
            <Input.Password />
          </Form.Item>  
          <Form.Item
           style={{textAlign: 'right'}}
          >
            <Link style={{marginRight: '8px'}} type='button' to='/signup'>регистрация</Link>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
            </Form>
          </Col>
        </Row>
      </PageHeader>      
    )
}


const mapStateToProps = (state) => ({
    isLoading: state.authReducer.isLoading,
    isAuth: state.authReducer.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Signin)