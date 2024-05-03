import Comment from "../comment/comment"
import "./comments.css"
export default function Comments(){
    return <div className="comments">
        <p>1234 Comments</p>
        <div className="comment-form d-flex w-100 my-2">
            <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="rounded-circle mr-3"
/>
<form  className="d-flex flex-grow-1">
    <input type="text" className="flex-grow-1" placeholder="write a comment..."/>
    <button className="border-0 p-2">Comment</button>
</form>
        </div>
        <div className="comment-list">
            {
                [...Array(15)].map((comment,idx)=><Comment key={idx}/>)
            }
        </div>
    </div>
}