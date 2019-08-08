import React from "react";
import { Layout, Menu,Row ,Col } from 'antd';
import CardCom from './components/CardCom'
import './styles'

// const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
class Home extends React.Component{
  render(){
    return(
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Content className='home-content'>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className='content-style'>
            <Row>
              <Col span={8}>
                <CardCom />
              </Col>
              <Col span={8}>
                <CardCom />
              </Col>
              <Col span={8}>
                <CardCom />
              </Col>
            </Row>
          </div>
          <div className='content-style'>
            <Row>
              <Col span={8}>
                <CardCom />
              </Col>
              <Col span={8}>
                <CardCom />
              </Col>
              <Col span={8}>
                <CardCom />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer className="home-foot">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}
export default Home