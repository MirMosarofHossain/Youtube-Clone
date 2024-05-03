import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomeScreen from './screen/home screen/homeScreen.jsx'
import LoginScreen from './screen/home screen/loginScreen/loginScreen.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import 'react-lazy-load-image-component/src/effects/blur.css';
import WatchScreen from './screen/watchScreen/watchScreen.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomeScreen></HomeScreen>
      },
      {
        path:'/search',
        element:null
      },
      {
        path:'/watch/:id',
        element:<WatchScreen></WatchScreen>
      }
    ]
  },
  {
    path:'/login',
    element:<LoginScreen></LoginScreen>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  // </React.StrictMode>,
)
