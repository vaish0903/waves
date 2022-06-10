import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav=({setLibraryInfo,libraryInfo}) => {
    return (
        <nav>
             <h1>WAVES</h1>
            <button onClick={() => {
                setLibraryInfo(!libraryInfo);
            }} >
                Library
                <FontAwesomeIcon icon={faMusic}/>
                  
            </button>
       </nav>
    )
}

export default Nav;