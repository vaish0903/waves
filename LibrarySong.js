import { faSmog } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const LibrarySong = ({isPlaying, song,songs,setCurrentSong,audioRef,setSongs,id }) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // Add state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
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

        // Check if song is Playing
        if (isPlaying) {
            audioRef.current.play();
     }
        
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
        <img src={song.cover}></img>
            <div className="song-description">
            <h3>{song.name }</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;