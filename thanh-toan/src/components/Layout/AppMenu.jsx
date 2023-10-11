import React from 'react'
import {Menu} from 'antd'


const MENU_ITEMS = [
  {
    key: 'payment-group',
    icon: <i className="fa-regular fa-computer text-base font-semibold"></i>,
    label: 'Thanh toán',
    // disabled: true
  },
  {
    key: 'main',
    icon: <i className="fa-regular fa-house text-base font-semibold"></i>,
    label: 'Trang chủ',
  },
  {
    key: 'contracts',
    icon:  <i className="fa-regular fa-file-signature text-base font-semibold"></i>,
    label: 'Quản lý hợp đồng',
  },
  {
    key: 'reports',
    icon:  <i className="fa-regular fa-files text-base font-semibold"></i>,
    label: 'Quản lý tờ trình',
  },
  {
    key: 'flows-config',
    icon:  <i className="fa-regular fa-gear text-base font-semibold"></i>,
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