import React from 'react'
import Song from './Song'

function Setlist({ setList, removeSongFromSetList, deleteSong }) {

    const songs = setList.map(song => {
        return <Song key={song.id} songObject={song} removeSongFromSetList={removeSongFromSetList} deleteSong={deleteSong} />
    })

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {songs}
        </div>
        </>
    );
}

export default Setlist;