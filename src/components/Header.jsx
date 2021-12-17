import {Row,Col} from 'antd';
import { Button } from 'antd';
import '../css/header.css'
import React from 'react'
function Header() {
    return (
        <>
          <Row align="middle">
            <Col xs={24}  className="mheader">
                <Row  justify="center" align="middle" >
                <Col md={24} lg={22} xl={18} className="iheader" >
                  <Col  className="icontent-h">
                    <Col xs={24} sm={24} md={6} lg={4} id="globalise-logo">
                       
                    </Col>
                        <Col  xs={24} sm={24} md={6} lg={4}  className="btn-cntnr" >
                        <Button  size="large"  type="primary" ghost>Advisor Login</Button>
                        </Col>
                  
                  </Col>

                </Col>
                
                </Row>
                
               
            </Col>
                      
          </Row>  

        
         

        </>
    )
}

export default Header
