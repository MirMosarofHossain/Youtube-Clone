import { useEffect, useState } from 'react'
import './categoriesBar.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { homeVideoAction } from '../../redux/store';
// import store from '../../redux/store';
export default function CategoriesBar() {
    const keywords = [
        'All',
        'React js',
        'Angular js',
        'React Native',
        'use of API',
        'Redux',
        'Music',
        'Algorithm Art ',
        'Guitar',
        'Bengali Songs',
        'Coding',
        'Cricket',
        'Football',
        'Real Madrid',
        'Hiba Nawab',
        'Poor Coder',
        'Shwetabh',
    ]
    const [activeElm, setActiveElm] = useState('All');
    const handlerForActive = (elm) => {
        // console.log('clicked');
        setActiveElm(elm)
    }

    let {nextPageToken} = useSelector((store)=>store.homeVideoStore)
    // console.log("nextPageToken is :",nextPageToken);
    const dispatch = useDispatch()

   useEffect(()=>{
        const getVideoByCategory =  async()=>{
             try {
                 console.log('calling.....category');
                 let {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/search',{
 
                     params:{
                         key:"AIzaSyA0wdkaS5dB-qx4G_QX4ZYj9ce5iQj2XzI",
                         part:"snippet",
                         maxResults: 20,
                         q:activeElm,
                         type:'video'
                     }
                 })

                //  console.log("the cate data : ",data);
               dispatch(homeVideoAction.homeVideoSuccess({
                 videos:data.items,
                 nextPageToken:data.nextPageToken,
                 activeCategory:activeElm,
             }))    
                 
             } catch (error) {
                 dispatch(homeVideoAction.homeVideoFail(error.message))
             }        
         }
        
         getVideoByCategory()

     },[activeElm])


    return (
        <>
            <div className='categoriesBar'>
                {
                    keywords.map((elm, idx) => <span onClick={() =>{handlerForActive(elm) }} className={activeElm == elm ? 'active' : ""} key={idx}>{elm}</span>)
                }
            </div>
        </>
    )
}