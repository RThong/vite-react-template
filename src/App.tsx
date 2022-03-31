import type { FC } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Outlet, useRoutes } from 'react-router-dom'

import styles from './App.module.less'
import logo from './logo.svg'
import Login from './pages/Login'
import { IS_DEV } from './utils/constant'

const Test = () => {
  return <div>Test</div>
}

const App: FC = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Login /> }].filter(Boolean) as RouteObject[]
    }
  ]

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes)

  return <div className={styles['App']}>{element}</div>
}

function Layout() {
  return (
    <div>
      <hr />

      <Outlet />
    </div>
  )
}

export default App
