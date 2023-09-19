import React from 'react'
import {Menu} from 'antd'


const MENU_ITEMS = [
  {
    key: 'payment-group',
    icon: <i className="fa-regular fa-computer text-base font-semibold"></i>,
    label: 'Thanh toán',
    disabled: true
  },
  {
    key: 'main',
    icon: <></>,
    label: 'Trang chủ',
  },
  {
    key: 'contracts',
    icon:  <></>,
    label: 'Quản lý hợp đồng',
  },
  {
    key: 'reports',
    icon:  <></>,
    label: 'Quản lý tờ trình',
  },
  {
    key: 'flows-config',
    icon:  <></>,
    label: 'Cấu hình luồng nghiệp vụ',
  },
]

function AppMenu() {
  return (
    <div className='app-menu flex flex-col items-center'>
      <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={MENU_ITEMS}
        />
    </div>
  )
}

export default AppMenu