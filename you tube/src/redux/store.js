import {configureStore, createSlice} from '@reduxjs/toolkit'
// import firebase from 'firebase/app'
// import firebase from "firebase/compat/app";
// import auth from '../firebase'
const authSlice = createSlice({
    name:'authentication',
    initialState:{
        accessToken:sessionStorage.getItem('youtube-accessToken'),
        user:JSON.parse(sessionStorage.getItem('youtube-user')),
        loading:false
    },
    reducers:{
       loginRequest:(state,action)=>{
        console.log('call...');
           return state = {...state,loading:true}
       },
       loginSuccess:(state,action)=>{
        console.log('login success');
          console.log(action.payload);
          sessionStorage.setItem('youtube-accessToken',action.payload)
          return state = {...state,accessToken:action.payload,loading:false}
       },
       loadProfile:(state,action)=>{
          console.log('profile loading...');
          sessionStorage.setItem('youtube-user',JSON.stringify(action.payload))
          return state = {...state,user:action.payload}
       },
       loginFail:(state,action)=>{
         return state = {...state,loading:false,accessToken:null,message:action.payload}
       },
       logOutFromApp:(state,action)=>{
        sessionStorage.removeItem('youtube-accessToken')
        sessionStorage.removeItem('youtube-user')
        return state = {...state,loading:false,accessToken:null,user:null}
       }
    }
})


// export const login = async ()=>{
//     try {
//         const provider = new firebase.auth.GoogleAuthProvider();
//       const res = await auth.signInWithPopup(provider);
//       console.log(res);
//     } catch (error) {
//         console.log('error is : ',error);
//     } 
// }

const homeVideoSlice = createSlice({
    name:'homevideo',
    initialState:{
        videos:[],
        nextPageToken:null,
        activeCategory:'All',
        loading:true

    },
    reducers:{
        homeVideoSuccess:(state,action)=>{
            console.log('home video call');
            console.log(action.payload);
            // state.videos = [...state.videos,action.payload.videos]
            // state.nextPageToken = action.payload.nextPageToken;
            // state.activeCategory = action.payload.activeCategory;
            // return state =  {...state,...action.payload}
            return state =  {...state,
                videos: state.activeCategory == action.payload.activeCategory ? [...state.videos,...action.payload.videos] : action.payload.videos,
                nextPageToken:action.payload.nextPageToken,
                activeCategory:action.payload.activeCategory,
                loading:action.payload.loading
            }
        },
        homeVideoFail:(state,action)=>{
            console.log('video load fail');
            return state =  {...state,videos:null,nextPageToken:null,message:action.payload}
        }
    }
})

const store = configureStore({
    reducer:{
        authStore:authSlice.reducer,
        homeVideoStore:homeVideoSlice.reducer,

    }
})


export default store;
export const authAction = authSlice.actions;
export const homeVideoAction = homeVideoSlice.actions;
