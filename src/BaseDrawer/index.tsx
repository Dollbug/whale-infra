import React from 'react'
import { Drawer } from 'antd'
import { DrawerProps } from 'antd/lib/drawer'
import 'antd/lib/drawer/style/index.js'

export interface BaseDrawerProps extends DrawerProps {
  size?: 'large' | 'default';
  children?: React.ReactNode;
  
  name:string
}


const BaseDrawer = ({ size, children, ...props }: BaseDrawerProps) => {
  return (
    <Drawer width={size === 'large' ? '80%' : 720} {...props}>
      {children}
    </Drawer>
  )
}

export default BaseDrawer
