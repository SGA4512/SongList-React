import { combineReducers } from 'redux';

const songsReducer = () => {
    return[
        {title: 'No Scrubs', duration: '4:30' },
        {title: 'Macarena', duration: '2:43' },
        {title: 'All Start', duration: '3:30' },
        {title: 'I want it that way', duration: '5:00' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }


    return selectedSong;
}


export default combineReducers({
    song: songsReducer,
    selectedSong: selectedSongReducer
})