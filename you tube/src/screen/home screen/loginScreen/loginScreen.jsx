import './loginScreen.css'
import {useDispatch, useSelector} from 'react-redux'
import { authAction } from '../../../redux/store'
import firebase from "firebase/compat/app";
import auth from '../../../firebase'
import { useEffect } from 'react';
import {redirect, useNavigate} from 'react-router-dom'
// import  login  from '../../../redux/login'
export default function LoginScreen(){
const dispatch = useDispatch()

  const login = async ()=>{
    try {
        dispatch(authAction.loginRequest())
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
      const res = await auth.signInWithPopup(provider);
      console.log(res);
      const accessToken = res.credential.accessToken;
      const profile = {
        name: res.additionalUserInfo.profile.name,
        photoUrl:res.additionalUserInfo.profile.picture,
      }
      dispatch(authAction.loginSuccess(accessToken))
      dispatch(authAction.loadProfile(profile))

    } catch (error) {
        dispatch(authAction.loginFail(error.message))
    } 
}

let {accessToken}= useSelector((store)=>store.authStore)
let navigate = useNavigate()

useEffect(()=>{
  if(accessToken){
   navigate('/')
  }

},[accessToken])

    // const dispatch = useDispatch()
  const loginHandaler = ()=>{
    login()
  }
    return <>
     <div className="login">
        <div className="login_container">
         <p>Youtube Clone</p>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={loginHandaler}>Login with google</button>
        <p>This project made with youtube data API</p>
        </div>
     </div>
    </>
}