import { Col, Row } from 'react-bootstrap'
import './watchScreen.css'
import {useParams,useLocation} from 'react-router-dom'
import VideoMetaData from '../../components/videoMetaData/videoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/videoHorizontal'
import Comments from '../../components/comments/comments'
export default function WatchScreen() {
    const {id} = useParams()
    const { state } = useLocation()
    console.log("check same or not ", state);
    return <Row>
        <Col lg={8}>
            <div className="watchScreen_player">
                <iframe src={`https://www.youtube.com/embed/${id}`}
                frameBorder = "0"                
                 title='My video'  
                 allowFullScreen
                 width="100%"
                 height="100%"></iframe>
            </div>
            <VideoMetaData/>
            <Comments/>
        </Col>

        <Col lg={4}>
            {[...Array(20)].map((elm,idx)=><VideoHorizontal key={idx}/>)}
        </Col>
    </Row>
}