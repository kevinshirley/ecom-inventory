'use client'

import { Drawer } from 'antd'

export default function ProductDrawer({ open, onSetOpen }: any) {
  const onClose = () => {
    onSetOpen(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement={'bottom'}
      closable={false}
      onClose={onClose}
      open={open}
      key={'bottom'}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}
