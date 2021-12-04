import React from "react";
import video from "../data/video.js";

import VideoArea from "./VideoArea.js";
import VoteArea from "./VoteArea.js";
import CommentArea from "./CommentArea.js";

function App() {
  
  return (
    <div className="App">
      <VideoArea videoData={video} />
      <VoteArea videoData={video} />
      <CommentArea videoData={video} />
    </div>
  );
}

export default App;
