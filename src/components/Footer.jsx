import React from 'react'
import '../css/footer.css'
import {Row,Col, Divider} from 'antd';

function Footer() {
    return (
        <>
        <Row justify='center' className='ftr-container'>   
            <Col lg={20} md={22} sm={22} xs={24} className='ftr-inner-col'>
                <Row  align="middle" className='ftr-items-row'>
                    <Col lg={8} md={12} sm={22} xs={24} className='ftr-items'>
                        <p>About</p>
                        <p>FAQs</p>
                        <p>User Agreement</p>
                        <p>Privacy Policy</p>
                        
                    </Col>
                    <Divider id="divider-ant"/>
                 
                </Row>
                
                <Row>
                    <div className="logo-ftr">
                   
                    </div>
                </Row>

            
            </Col>


                
        </Row>
        </>
    )
}



export default Footer
