import React, {useState,useRef} from "react";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import LibrarySong from "./components/LibrarySong";
import Nav from "./components/Nav";
// Importing Styles
import './styles/app.scss';
import data from './data';


function App() {
   // Ref
  const audioRef = useRef(null);
  // EFFECT
 
  // State
  const [songs, setSongs] = useState((data));
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
   const [songInfo, setSongInfo] = useState({
      currentTime: 0,
     duration: 0,
     animationPercentage: 0,
        
   });
  const [libraryInfo, setLibraryInfo] = useState(false);
  const updateTimeHandler = (e) => {
       const  current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
   
    
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
   
  }
  const songEndHandler =  () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
     setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
        
  };
  return (
    <div className="App">
      <Nav libraryInfo={libraryInfo} setLibraryInfo={setLibraryInfo}/>
      <Song currentSong={currentSong }/>
      <Player  setSongs={ setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong} />
      <Library  setLibraryInfo={setLibraryInfo} libraryInfo={libraryInfo}  setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} songs={songs} />
      <audio onLoadedMetadata={updateTimeHandler}
        onTimeUpdate={updateTimeHandler}
        ref={audioRef}
        onEnded={songEndHandler}
        src={currentSong.audio}
        
      ></audio>
    </div>
  );
}

export default App;
 