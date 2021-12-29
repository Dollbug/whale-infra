import React from 'react';
import { DrawerProps } from 'antd/lib/drawer';
import 'antd/lib/drawer/style/index.js';
export interface BaseDrawerProps extends DrawerProps {
    size?: 'large' | 'default';
    children?: React.ReactNode;
    name: string;
}
declare const BaseDrawer: ({ size, children, ...props }: BaseDrawerProps) => JSX.Element;
export default BaseDrawer;
