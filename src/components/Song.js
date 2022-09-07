import React from 'react'

function Song({ songObject, handleClick, removeSongFromSetList, deleteSong }) {

    const {image, song, artist} = songObject

    return(
        <div className="song">
            <img src={image} onClick={handleClick !== undefined ? () => handleClick(songObject) : () => removeSongFromSetList(songObject)}/>
            <div className="song-info" onClick={handleClick !== undefined ? () => handleClick(songObject) : () => removeSongFromSetList(songObject)}>
                <h3>{song}</h3>
                <h4>{artist}</h4>
            </div>
            <button onClick={() => deleteSong(songObject)}>X</button>
        </div>
    );
}

export default Song;