import './video.css'
import {AiFillEye} from 'react-icons/ai'
import moment from 'moment';
import numeral from 'numeral'
import { useEffect, useState } from 'react';
import axios from "axios";
export default function Video({video}){
    // console.log(video);
     
      const [duration,setDuration] = useState('')
      const [viewCount,setViewCount] = useState('')
     let channelId = video.snippet.channelId;
     let videoId = video.id.videoId;
     let [channelIcon,setChannelIcon]=useState("")

    useEffect(()=>{
        const getVideoDetails = async ()=>{
            try {
                let {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/videos',{
                    params:{
                        key:"AIzaSyA0wdkaS5dB-qx4G_QX4ZYj9ce5iQj2XzI",
                        part:'contentDetails,statistics',
                        id:videoId
                    }
                })
                const miliSecond = moment.duration(data.items[0].contentDetails.duration)
                setDuration(moment.utc(miliSecond*1000).format("mm:ss"))
                setViewCount(numeral(data.items[0].statistics.viewCount).format("0.a"))
            } catch (error) {
                
            }
        }
        getVideoDetails()
    },[videoId])
    
    useEffect(()=>{
        const getChannel = async ()=>{
            try {
                let {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/channels',{

                    params:{
                        key:"AIzaSyA0wdkaS5dB-qx4G_QX4ZYj9ce5iQj2XzI",
                        part:"snippet",
                        id:channelId,
                        regionCode: 'IN',
                        maxResults: 20,
                        pageToken:'',
                    }
                })
                // console.log( 'channel info is ... ',data);
                setChannelIcon(data.items[0].snippet.thumbnails.medium.url);
            } catch (error) {
                console.log(error.message);
            }
        }
        getChannel()
     },[channelId])

    return (
        <>
        <div className='video'>
            <div className="video_top">
                <img src={video.snippet.thumbnails.high.url} alt="" />
                <span>{duration}</span>
            </div>
            <div className="video_title">
                {video.snippet.title}
            </div>
            <div className="video_details">
                <span>
                    <AiFillEye></AiFillEye> {viewCount} views • 
                </span>
                <span className='publishDate'>  {moment(video.snippet.publishedAt).fromNow()}</span>
            </div>
            <div className="video_channel">
                <img src={channelIcon} alt="" />
                <p>{video.snippet.channelTitle}</p>
            </div>
        </div>
        </>
    )
}