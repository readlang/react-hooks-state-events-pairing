import React, {useState} from "react";
import Comment from "./Comment.js"

function CommentArea({ videoData }) {
    const [commentsVisible, setCommentsVisible] = useState( true )
    console.log(commentsVisible)

    return(
        <div>
            <button onClick={ ()=> setCommentsVisible(!commentsVisible) } > { commentsVisible ? "Hide Comments" : "Show Comments"} </button>
            <hr/>
            <h2>{videoData.comments.length} Comments</h2>
            <Comment />
            <Comment /> 
        </div>
    )
}

export default CommentArea