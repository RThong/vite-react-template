// import {useModel} from '@vite-plugin-react-use-model'
import { useModel } from '@vite-plugin-react-use-model'
import { Button } from 'antd'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import styles from './index.module.less'
const Test = () => {
  const navigate = useNavigate()

  const [a, setA] = useModel('useA')

  return (
    <div className="h-[500px] border border-solid border-gray-300">
      Test
      <Button onClick={() => navigate('/test/a')} className={styles.test}>
        page a
      </Button>
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
