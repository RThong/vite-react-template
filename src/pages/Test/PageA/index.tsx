import { useModel } from '@vite-plugin-react-use-model'
import { Button } from 'antd'

const PageA = () => {
  const [a, setA] = useModel('useA')

  return (
    <div className="h-[50px] border border-solid border-green-700">
      <Button onClick={() => setA(_ => _ + 1)}>+1</Button>这是A: {a}
    </div>
  )
}

export default PageA
