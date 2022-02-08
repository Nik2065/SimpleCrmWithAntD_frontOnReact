
import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';

import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Main() {
    return (
<Layout>
    <Header className="header">
      {/*<div className="logo" />*/}
        <Row>
            <Col span={20}>
                <span style={{color:"white"}}>Title</span>
            </Col>
            <Col span={4}>
                <span style={{color:"white"}}>User login: someuser</span>
                &nbsp;&nbsp;&nbsp;
                <Button type="default" size='small'>Logout</Button>
            </Col>
        </Row>
      {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          
        {
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        
      </Menu>*/}
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="sub1" icon={<UserOutlined />}>Заказы</Menu.Item>
          <Menu.Item key="sub2" icon={<LaptopOutlined />}>Клиенты</Menu.Item>
          <SubMenu key="sub3" icon={<LaptopOutlined />} title="Настройки">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
  }
  
  export default Main;
  
