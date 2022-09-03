import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-router'

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
    return(
        <Layout>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to={'kitchens'}>Kitchens</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={'restaurants'}>Restaurant</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', height: '100vh'}}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
               <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}

export default Dashboard