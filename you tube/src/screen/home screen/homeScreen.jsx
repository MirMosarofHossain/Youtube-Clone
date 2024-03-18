import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/categoriesBar";
import Video from "../../components/video/video";
import { useEffect } from "react";
// import request from "../../redux/api";
import {useDispatch, useSelector} from 'react-redux'
import store, { homeVideoAction } from "../../redux/store";
import axios from "axios";

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

   let {videos} = useSelector((store)=>store.homeVideoStore)

    return (
        <>
            <Container>
                <CategoriesBar></CategoriesBar>
                <Row>
                    {
                    videos.map((elm) => <Col key={elm.id.videoId} lg={3} md={4}>
                            <Video video={elm}></Video>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}