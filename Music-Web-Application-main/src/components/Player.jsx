export const Player = ({fn, song})=>{
    return (<div>
        <button onClick={()=>{
            fn(false,null);
        }}
        className="btn btn-success">Back to Songs</button>
        <br/>       
        <img src={song.artworkUrl100}/>
        <p>
            {song?.artistName} {song?.trackName}
        </p>
        <br/>
        <br/>
        <audio controls>
        
        <source src={song?.previewUrl} type="audio/mp4"/>
        Your Browser does not support the audio content
    </audio>
    </div>)
}