import { Layout, Button, Typography, Space } from 'antd'
import './index.css'

const Header = () => {
    return (
        <Layout.Header className='main_header'>
            <Typography.Title level={3}>
                Jira
            </Typography.Title>
            
            <Space>
                <Button>
                    Register
                </Button>

                <Button>
                    Login
                </Button>

            </Space>
        </Layout.Header>
    )
}

export default Header;