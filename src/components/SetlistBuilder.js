import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

    const [songList, setSongList] = useState([])
    const [setList, setSetList] = useState([])

    // Runs fetch only once
    useEffect(() => {
        fetch("http://localhost:3110/tracks")
        .then(response => response.json())
        .then(songData => {
            setSongList(songData)
        })
    }, [])

    // Adds a song to the setList (no duplicates can be added)
    function handleClick(songObject){
        if(!setList.find(song => {
            return song.id === songObject.id
        })){
            setSetList([...setList, songObject])
        }
    }

    // Removes a song from the setList
    function removeSongFromSetList(songObject){
        setSetList(setList.filter(song => {
            return song.id !== songObject.id
        }))
    }

    // Removes a song from the songList
    function removeSongFromSongList(songObject){
        setSongList(songList.filter(song => {
            return song.id !== songObject.id
        }))
    }

    // Deliverable #4 - Remove a song forever
    // Deletes the song from both the backend and the frontend
    function deleteSong(songObject){
        removeSongFromSongList(songObject)
        removeSongFromSetList(songObject)
        fetch(`http://localhost:3110/tracks/${songObject.id}`, {
            method: "DELETE"
        })
    }

    // First component renders
    // Then useEffect code runs

    // Rules of useEffect

    // 1) If you have no dependency array in useEffect, then
    // each time component renders, useEffect code runs
    // after.

    // 2) If you have an empty dependency array [], then
    // component renders initially, and then the useEffect
    // code runs once and never again

    return(
        <div className="builder">
            <SongList songList={songList} handleClick={handleClick} deleteSong={deleteSong}/>
            <div className="vl"></div>
            <Setlist setList={setList} removeSongFromSetList={removeSongFromSetList} deleteSong={deleteSong}/>
        </div>
    );
}

export default SetlistBuilder;