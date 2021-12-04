import React, {useState} from "react";

function VoteArea( {videoData} ) {
    const [votes, setVotes] = useState({ up: videoData.upvotes, down: videoData.downvotes })
    
    return(
        <div>
            <button onClick={() => setVotes( {...votes, up: (votes.up + 1) } )} >{votes.up} 👍🏽</button>
            <button onClick={() => setVotes( {...votes, down: (votes.down + 1) } )} >{votes.down} 👎🏽</button>
            <br>{/*linebreak*/}</br>
            <br>{/*linebreak*/}</br>
        </div>
    )
}

export default VoteArea;