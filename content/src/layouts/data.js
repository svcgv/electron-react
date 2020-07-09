import React from 'react'
import { Home, Lock, CloudDownload } from '@material-ui/icons'
export const menuArr = [
  { name: '主页', url: '/', icon: <Home /> },
  { name: '密码加密', url: '/password', icon: <Lock /> },
  { name: '下载器', url: '/download', icon: <CloudDownload />, children: ['asdas'] }
]
