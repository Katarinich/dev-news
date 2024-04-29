import React from 'react';

import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

function Footer() {
  return (
    <AntdFooter style={{ textAlign: 'center' }}>
      Dev News ©{new Date().getFullYear()} Created by GrSU
    </AntdFooter>
  );
}

export default Footer;
