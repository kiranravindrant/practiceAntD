import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {Row,Col} from 'antd';
import '../css/loginform.css'

function Loginform() {

 
        const onFinish = (values) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
      

    return (
        <>    
            <Row justify='center' >
                <Col className='title-main'>
                <h2>Customer Login</h2>
                </Col>

            </Row>

            <Row align='middle'  style={{height:'80vh'}}>
               
                <Col sm={24} >

               
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    > 
               
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your EmailAddress!' }]}> 
                        
                  
                        <Input size='large' placeholder="Email Address" />
                     
                        
                       
                        </Form.Item>
                
                        

                    <Form.Item
                        
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password"  />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 0 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <p>Forgot Password?</p>

                    <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
                        <Button type="primary" htmlType="submit">
                        Login
                        </Button>
                    </Form.Item>

                    <p>New User? <span>Sign UP</span></p>
                    </Form>
                </Col>
             
            </Row>
           

            
        </>
    )
}

export default Loginform
