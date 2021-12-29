
## BaseDrawer

Demo:

```tsx
import React,{useState} from 'react';
import {Button} from 'antd'
import { BaseDrawer } from 'whale-infra';

const [visible,setVisible]= useState(false)

const onClick = ()=>{
    setVisible(true)
}

 const onClose = () => {
    setVisible(false);
  };

export default () => (
    <div>
        <Button onClick={onClick}>点击显示弹窗</Button>
        <BaseDrawer visible={visible} onClose={onClose}>
            <Button>点击显示弹窗</Button>
        </BaseDrawer>
    </div>
)

```
<API src="./index.tsx"></API>
