import {Form, Button, Input, Row, Col, PageHeader} from 'antd'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions'

function Signup(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
        props.authActions.signUp(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
      <PageHeader 
      className="site-page-header">
        <Row gutter={[16, 16]}>
          <Col span={12} offset={6}>
            <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
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
          <Form.Item style={{textAlign: 'right'}}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
            </Form>
          </Col>
        </Row>
      </PageHeader>
        
    )
}


const mapStateToProps = (state) => ({
    isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Signup)