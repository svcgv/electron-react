import React from 'react'
import { Home, Lock, CloudDownload } from '@material-ui/icons'
export const menuArr = [
  { name: '主页', url: '/', icon: <Home /> },
  { name: '密码加密', url: '/password', icon: <Lock /> },
  {
    name: '下载器',
    url: '/download',
    icon: <CloudDownload />,
    children: [
      { name: '正在下载', url: '/download/downloading' },
      { name: '已完成', url: '/download/finish' },
      { name: '配置', url: '/download/config' }
    ]
  }
]
