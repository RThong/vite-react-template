import type { FC } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Outlet, useRoutes } from 'react-router-dom'

import styles from './App.module.less'
import logo from './logo.svg'
import Login from './pages/Login'
import Test from './pages/Test'
import PageA from './pages/Test/PageA'
import PageB from './pages/Test/PageB'
import { IS_DEV } from './utils/constant'
console.log('【IS_DEV】', IS_DEV)

const App: FC = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        IS_DEV && {
          path: 'test',
          element: <Test />,
          children: [
            { path: 'a', element: <PageA /> },
            { path: 'b', element: <PageB /> }
          ]
        }
      ].filter(Boolean) as RouteObject[]
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
