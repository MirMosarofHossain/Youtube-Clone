import "./videoMetaData.css"
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbUp,MdThumbDown} from "react-icons/md"
import ShowMoreText from "react-show-more-text"
export default function VideoMetaData(){
    return <div className="videoMeteData py-2">
          <div className="videoMeteData_top">
            <h5>Video title</h5>
            <div className="py-1 d-flex justify-content-between align-items-center">
            <span>
                  {numeral(100000).format('0.a')} Views •{' '}
                  {moment("2020-06-6").fromNow()}
               </span>
           
            <div>
                <span>
                <MdThumbUp size={26}/> {numeral(100000).format('0.a')} {"  "}
                </span>

                <span>
                <MdThumbDown size={26}/> {numeral(1000).format('0.a')}
                </span>
            </div>
          </div>
          </div>
          <div className="py-3 my-2 videoMetaData_channel d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="" className="rounder-circle mr-3" />
                <div className="d-flex flex-column">
                    <span>Be a Coder</span>
                    <span>{numeral(100000).format('0.a')} Subscriber</span>
                </div>
            </div>
            <button className="btn border-0 p-2 m-2 ">Subscribe</button>
          </div>
          <div className="videoMeteData_description">
           <ShowMoreText
           lines={3}
           more='SHOW MORE'
           less='SHOW LESS'
           anchorClass="showMoreText"
           expanded={false}
           >
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium fugit vero quae, iste amet dolor
            sequi beatae in asperiores quasi sed dicta porro ratione autem sint magnam itaque. Autem, neque.
           Quaerat itaque perspiciatis soluta. Impedit voluptatibus obcaecati minus ut aliquid deleniti facere 
           qui laudantium eligendi ipsum autem, nemo repellat. Quia optio fugiat rerum ea asperiores illum 
           voluptates aspernatur. Nisi, itaque?
           </ShowMoreText>
          </div>
        
    </div>
}