import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/categoriesBar";
import Video from "../../components/video/video";
import { useEffect } from "react";
// import Skeleton from 'react-loading-skeleton'
import {useDispatch, useSelector} from 'react-redux'
import store, { homeVideoAction } from "../../redux/store";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from "../../components/Skeleton/skeleton";


export default function HomeScreen() {
    const dispatch = useDispatch()
    let {accessToken} = useSelector((store)=>store.authStore)
    // console.log('home screeen');

  /*  useEffect(()=>{
       const getPopularVideo =  async()=>{
            try {
                console.log('calling......2.....');
                let {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/videos',{

                    params:{
                        key:"AIzaSyA0wdkaS5dB-qx4G_QX4ZYj9ce5iQj2XzI",
                        part:"snippet,contentDetails,id,status,statistics",
                        chart: 'mostPopular',
                        regionCode: 'IN',
                        maxResults: 20,
                        pageToken:'',
                    }
                })
                console.log(data);
            //   dispatch(homeVideoAction.homeVideoSuccess({
            //     videos:data.items,
            //     nextPageToken:data.nextPageToken
            // }))
                
            } catch (error) {
                dispatch(homeVideoAction.homeVideoFail(error.message))
            }        
        }
        
        if(accessToken){ 
            getPopularVideo()
        }
    },[accessToken])*/
    let {videos,nextPageToken,activeCategory,loading} = useSelector((store)=>store.homeVideoStore)
   console.log("video >>>> " , videos);
   console.log("next token  ", nextPageToken);
   console.log("active...",activeCategory);

    const fetchData = async()=>{
        try {
            console.log('calling..... for nextvieo');
            let {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/search',{

                params:{
                    key:"AIzaSyA0wdkaS5dB-qx4G_QX4ZYj9ce5iQj2XzI",
                    part:"snippet",
                    maxResults: 20,
                    q:activeCategory,
                    type:'video',
                    pageToken:nextPageToken,
                    
                }
            })

            console.log("the nex video data : ",data);
          dispatch(homeVideoAction.homeVideoSuccess({
            videos:data.items,
            nextPageToken:data.nextPageToken,
            activeCategory:activeCategory,
        }))    
            
        } catch (error) {
            console.log("not geting data.....");
            dispatch(homeVideoAction.homeVideoFail(error.message))
        }        
    }

//    console.log("vido");

    return (
        <>
           <Container>
                <CategoriesBar></CategoriesBar>
            
                <InfiniteScroll 
                    dataLength={videos.length}
                     next={fetchData} 
                     hasMore={true} 
                     loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    } className='row'>

                    {!loading ?  videos.map((elm,idx) => <Col key={elm.id.videoId + idx} lg={3} md={4}>
                            <Video video={elm}></Video>
                        </Col>
                        ): [...Array(20)].map(() => (
                            <Col lg={3} md={4}>
                               <SkeletonVideo />
                            </Col>))
                    }

                    </InfiniteScroll>
            </Container>
        </>
    )
}