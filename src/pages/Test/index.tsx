// import {useModel} from '@vite-plugin-react-use-model'
import { useModel } from '@vite-plugin-react-use-model'
import { Button } from 'antd'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Test = () => {
  const navigate = useNavigate()

  const [a, setA] = useModel('useA')

  return (
    <div style={{ border: '1px solid #ccc', height: 500 }}>
      Test
      <Button onClick={() => navigate('/test/a')}>page a</Button>
      <Button onClick={() => navigate('/test/b')}>page b</Button>
      <Button onClick={() => navigate('/test')}>test</Button>
      <div>
        <Button onClick={() => setA(_ => _ + 1)}>+1</Button>
        这是A: {a}
      </div>
      <Outlet />
    </div>
  )
}

export default Test
