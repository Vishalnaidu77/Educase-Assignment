import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './Layout/AppLayout'
import Welcome from './Pages/Welcome'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Account from './Pages/Account'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Welcome />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "account",
          element: <Account />
        },
      ]
    }
  ])
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
