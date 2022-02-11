import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import '../assets/styles/layouts/main-layout.sass';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => (
  <Layout className="main-layout">
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
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content>
        {children}
      </Content>
    </Layout>
  </Layout>
)

export default MainLayout
