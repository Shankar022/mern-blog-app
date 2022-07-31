import React, {useState} from "react";
import {Menu, Avatar} from "antd";
import blogLogo from "./../../assets/images/blog.png"
import './Navbar.css'
import {
    LoginOutlined,
    UserAddOutlined,
    SettingOutlined,
    GroupOutlined,
    FormOutlined,
    UserOutlined
} from "@ant-design/icons";


const Navbar = () => {
    const [userLoginState, setUserLoginState] = useState(true)
    return (
            <Menu selectedKeys={"logo"} mode="horizontal" theme="light">
                <Menu.Item>
                    <a href="/">
                        <Avatar src={blogLogo} shape="square"/> &nbsp; Blog App
                    </a>
                </Menu.Item>
                {userLoginState ? (
                    <Menu.SubMenu
                        key="SubMenu"
                        icon={<Avatar icon={<UserOutlined/>} shape="circle"/>}
                        title= "User"
                    >
                        <Menu.Item
                            key="userProfile"
                            icon={<SettingOutlined />}
                        >

                            <a href="/user/profile">User Profile</a>

                        </Menu.Item>
                        <Menu.Item
                            key="userPosts"
                            icon={<GroupOutlined />}
                        >
                            <a href="/user/posts">User Posts</a>
                        </Menu.Item>
                        <Menu.Item
                            key="logout"
                            icon={<LoginOutlined />}
                        >
                            Logout
                        </Menu.Item>
                    </Menu.SubMenu>

                ) : (
                    <>
                        <Menu.Item
                            key="login"
                            icon={<LoginOutlined/>}
                        >

                            <a href="/login">Login</a>
                        </Menu.Item>
                        <Menu.Item
                            key="logout"
                            icon={<UserAddOutlined/>}
                        >
                            <a href="/signup">Signup</a>
                        </Menu.Item>
                    </>
                )
                }

            </Menu>

    )
}

export default Navbar;