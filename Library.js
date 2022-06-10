import React from "react";
import LibrarySong from "./LibrarySong";
const Library= ({  setLibraryInfo, libraryInfo,isPlaying,audioRef,songs,setCurrentSong,setSongs}) => {
    return (
        <div className={`library ${libraryInfo ? 'activated-library': ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong id = {song.id} setSongs={setSongs} isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} song={song} audioRef={audioRef }/>
             ))}
            </div>
        </div>
    )
}

export default Library;