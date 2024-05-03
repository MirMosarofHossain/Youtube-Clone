import './videoHorizontal.css'
import {AiFillEye} from 'react-icons/ai'
import moment from 'moment';
import numeral from 'numeral'
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function VideoHorizontal(){

    const seconds = moment.duration(100).asSeconds()
   const duration = moment.utc(seconds * 1000).format('mm:ss')

    return <Row className='py-2 m-1 videoHorizontal align-align-items-center'>
        <Col xs={6} md={6} className='videoHorizontal-left'>
        <LazyLoadImage
               src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
               effect='blur'
               className='videoHorizontal_thumbnail'
               wrapperClassName='videoHorizontal_thumbnail-wrapper'
            />
            <span className='videoHorizontal_duration'>{duration}</span>
        </Col>


        <Col xs={6} md={6} className='p-0 videoHorizontal-right'>
        <p className='mb-1 videoHorizontal_title'>Lwarn full stack in 1 month</p>
        <div className='videoHorizontal_details'>
               <AiFillEye /> {numeral(10000).format('0.a')} Views •
               {moment('2024-04-04').fromNow()}
            </div>

            <div className='my-1 videoHorizontal_channel d-flex align-items-center'>
               {/* //TODO show in search screen */}
               {/* <LazyLoadImage
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               effect='blur'
             
            /> */}
               <p className='mb-0'>Be a Coder</p>
            </div>
        </Col>
    </Row>
}