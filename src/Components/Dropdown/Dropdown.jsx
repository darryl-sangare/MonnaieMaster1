import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import styles from './Dropdown.module.scss'

const items = [
  {
    label: <a href="/">FR</a>,
    key: '0',
  },

];

const CustomDropdown = () => (
  <Dropdown menu={{ items, }} trigger={['click']} >
    <a onClick={(e) => e.preventDefault()}>
      <Space className={styles.fr} >
        FR
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default CustomDropdown;
