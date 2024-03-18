import './App.css'
import Header from './components/header/header'
import SideBar from './components/side bar/sideBar'
import { Container } from "react-bootstrap"
import HomeScreen from './screen/home screen/homeScreen'
import { useEffect, useState } from 'react'
import LoginScreen from './screen/home screen/loginScreen/loginScreen'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from './redux/store'

// const Layout = () => {
//   const [sidebar, setSidebar] = useState(false)
//   const handleToggleSidebar = () => {
//     // console.log(sidebar);
//     setSidebar(value => !value)
//   }
//   return (
//     <>
//       <Header handleToggleSidebar={handleToggleSidebar} />
//       <div className="app_container">
//         <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}></SideBar>
//         <Container fluid className='app_main'>
//         <HomeScreen></HomeScreen>
//         </Container>
//       </div>
//     </>
//   )
// }

function App() {
  const [sidebar, setSidebar] = useState(false)
  const handleToggleSidebar = () => {
    // console.log(sidebar);
    setSidebar(value => !value)
  }
  let {accessToken,loading} = useSelector((store)=>store.authStore)
  const navigate = useNavigate()

  useEffect(()=>{
     if(!accessToken){
       navigate('/login')
     }
  },[accessToken])

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app_container">
        <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}></SideBar>
        <Container fluid className='app_main'>
          {/* <HomeScreen></HomeScreen> */}
          <Outlet></Outlet>
        </Container>
        
      </div>

      {/* <LoginScreen></LoginScreen> */}

    </>

  )
}

export default App
