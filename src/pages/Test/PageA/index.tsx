import { useModel } from '@vite-plugin-react-use-model'
import { Button } from 'antd'

const PageA = () => {
  const [a, setA] = useModel('useA')

  return (
    <div style={{ border: '1px solid green', height: 200 }}>
      <Button onClick={() => setA(_ => _ + 1)}>+1</Button>这是A: {a}
    </div>
  )
}

export default PageA
