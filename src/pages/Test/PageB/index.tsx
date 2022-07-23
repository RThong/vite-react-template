import { useModel } from '@vite-plugin-react-use-model'
import { Button } from 'antd'
import React from 'react'

const PageB = () => {
  const [b, setB] = useModel('useB')

  return (
    <div style={{ border: '1px solid blue', height: 200 }}>
      PageB
      <Button onClick={() => setB(_ => _ + 1)}>+1</Button> 这是B: {b}
    </div>
  )
}

export default PageB
