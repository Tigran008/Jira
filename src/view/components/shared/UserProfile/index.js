import { Avatar, Dropdown, Typography, Flex, Divider } from "antd";
import { UserOutlined } from '@ant-design/icons'

const { Text } = Typography;

const user = {
    firstName: 'Tigran',
    lastName: 'Shahsuvaryan',
    headline: 'Front End Developer',
    email: 'shahsuvaryann@gmail.com',
    logout: ''
}

const items = [
    {
        key: 'profile',
        label: (
            <Flex vertical justify="center" align="center">
                <Avatar 
                    size={64}
                    icon={ <UserOutlined /> }
                />

                <Text>
                    Tigran Shahsuvaryan
                </Text>

                <Text underline>
                    shahsuvaryann@gmail.com
                </Text>

                <Divider />
            </Flex>
        )
    },
    {
        key: 'logoout',
        label: 'Logout'
    }
]

const UserProfile = () => {
    return (
        <Dropdown 
            menu={{
                items
            }}
        >
            <Avatar size="large">
                T S
            </Avatar>
        </Dropdown>
    )
}

export default UserProfile;