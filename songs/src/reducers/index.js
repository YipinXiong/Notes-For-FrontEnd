import { combineReducers } from 'redux';

//here it's overkilled to use redux to manage static arrary; however, you will know how to handle
// in the future
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Tomorrow', duration: '2:05'},
    { title: 'All Star', duration: '3:15'},
    { title: 'Someone like you', duration: '5:13'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});