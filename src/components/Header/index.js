import React from 'react';

import { Flex, Layout, Typography } from 'antd';
import { TaobaoCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AntdHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Flex
        align="center"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      >
        <TaobaoCircleOutlined style={{ color: '#fff', fontSize: '32px' }} />

        <Title style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
          Dev News
        </Title>
      </Flex>

      <Link to="/login">Sign In or Sign Up</Link>
    </AntdHeader>
  );
}

export default Header;
