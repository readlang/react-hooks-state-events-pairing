import React from "react";

function VideoArea( {videoData} ) {
    
    return(
        <div>
            <iframe
                width="700"
                height="400"
                src={videoData.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={videoData.title}
            />
            <h1>{videoData.title}</h1>
            <div>{videoData.views} Views | Uploaded {videoData.createdAt}</div>
            <br>{/*linebreak*/}</br>
        </div>
    )
}

export default VideoArea;
