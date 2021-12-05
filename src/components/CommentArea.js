import React, {useState} from "react";
import Comment from "./Comment.js"

function CommentArea({ videoData }) {
    const [commentsVisible, setCommentsVisible] = useState( true )
    
    function showComments() {
        return(
            <>
                <h2>{videoData.comments.length} Comments</h2>
                { videoData.comments.map((x) => <Comment key={x.id} user={x.user} comment={x.comment}/>) }
            </>
        )
    }

    return(
        <div>
            <button onClick={ ()=> setCommentsVisible(!commentsVisible) } > { commentsVisible ? "Hide Comments" : "Show Comments"} </button>
            <hr/>
            {commentsVisible ? showComments() : "Comments have been hidden" }
        </div>
    )
}

export default CommentArea