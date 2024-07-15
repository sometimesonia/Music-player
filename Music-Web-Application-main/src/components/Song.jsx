import { useState } from "react"

export const Song = ({fn,song})=>{
   const [playerFlag, setPlayerFlag] = useState(false);
    const showPlayer = ()=>{
        fn(true,song);
   }
   
   return (<div className="row m-2 bg-secondary rounded">
        <div className="col-4 rounded-left ">
            <img src={song.artworkUrl100}/>
        </div>
    <div className="col-4 ">
    {song.artistName} {song.trackName} 
    </div>
   <div className="col-4">
        <button onClick={showPlayer} className="btn btn-primary mt-4">Play Song</button>
   </div>
   
    </div>)
}