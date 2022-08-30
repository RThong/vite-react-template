import { useModel } from '@vite-plugin-react-use-model'
import { Button } from 'antd'

const PageB = () => {
  const [b, setB] = useModel('useB')

  return (
    <div className="border border-solid border-blue-700">
      PageB
      <Button onClick={() => setB(_ => _ + 1)}>+1</Button> 这是B: {b}
    </div>
  )
}

export default PageB
