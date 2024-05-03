import "./comment.css"
export default function Comment(){
    return <div className="comment d-flex p-2">
        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
 alt="" className="mr-3 rounded-circle"/>

<div className='comment-body'>
            <p className='mb-1 comment-header'>
               {/* {authorDisplayName} • {moment(publishedAt).fromNow()} */}
               Be a Coder • 8 month ago
               
            </p>
            <p className='mb-0'>Well done by its really apriciated</p>
         </div>
    </div>
}