import React,{useRef,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";




const Player = ({ setSongs,setCurrentSong,songs,songInfo,setSongInfo, audioRef,currentSong,isPlaying,setisPlaying }) => {
   
    // Event Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setisPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setisPlaying(!isPlaying);

        }
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0"+ Math.floor(time % 60)).slice(-2)
        )
    }
    
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo,currentTime:e.target.value})
    }
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        } else {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if (isPlaying) {
                       audioRef.current.play();
               }
               return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) {
            audioRef.current.play();
        }
       
        
    }
    // STYLES
    const trackAnime = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
        
        

    
   
   
 
    return (
        <div className="player">
            <div className="time-control">
                <p>{songInfo.duration ? getTime(songInfo.currentTime) : "0.00"}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]}`}} className="track">
                    <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                    <div className="animate-track" style={trackAnime}></div>
               </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" onClick={() => skipTrackHandler("skip-back")} icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" onClick={() => skipTrackHandler("skip-forward")} size="2x" icon={faAngleRight}/>
        
                 
            </div>
          
        </div>
    )
}

export default Player;