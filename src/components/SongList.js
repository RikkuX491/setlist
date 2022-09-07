import React from 'react'
import Song from './Song'

function SongList({ songList, handleClick, deleteSong }) {

    const songs = songList.map(song => {
        return <Song key={song.id} songObject={song} handleClick={handleClick} deleteSong={deleteSong}/>
    })

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {songs}
        </div>
        </>
    );
}

export default SongList;