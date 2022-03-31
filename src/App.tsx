import { Button } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Link, Outlet, useParams, useRoutes, useSearchParams } from 'react-router-dom'

import styles from './App.module.less'
import logo from './logo.svg'
import { IS_DEV } from './utils/constant'

const Test = () => {
  return <div>Test</div>
}

const App: FC = () => {
  const [count, setCount] = useState(0)

  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/courses',
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: '/courses/:id', element: <Course /> }
          ]
        },
        IS_DEV && { path: '/test', element: <Test /> },
        { path: '*', element: <NoMatch /> }
      ].filter(Boolean) as RouteObject[]
    }
  ]

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes)

  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
          <Button type="primary">click</Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        {element}
      </header>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Courses() {
  let [searchParams, setSearchParams] = useSearchParams()
  searchParams.forEach((...args) => console.log(args))
  console.log('【searchParams】', searchParams)
  return (
    <div>
      <h2>Courses</h2>
      <Button
        onClick={() => {
          setSearchParams({
            status: 'active'
          })
        }}
      >
        click
      </Button>
      <Outlet />
    </div>
  )
}

function CoursesIndex() {
  return (
    <div>
      <p>Please choose a course:</p>

      <nav>
        <ul>
          <li>
            <Link to="react-fundamentals">React Fundamentals</Link>
          </li>
          <li>
            <Link to="advanced-react">Advanced React</Link>
          </li>
          <li>
            <Link to="react-router">React Router</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function Course() {
  let { id } = useParams<'id'>()

  return (
    <div>
      <h2>Welcome to the {id!.split('-').map(capitalizeString).join(' ')} course!</h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  )
}

function capitalizeString(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default App
