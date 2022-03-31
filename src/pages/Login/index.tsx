import { Button } from 'antd'

const Login = () => {
  const handleLogin = () => {
    fetch('/api/aa', {
      // method: 'POST'
    }).then(res => {
      console.log(res)
    })
  }
  return (
    <div>
      Login
      <div>
        <Button onClick={handleLogin}>登录</Button>
      </div>
    </div>
  )
}

export default Login
