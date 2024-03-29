import React from 'react';
import { connect } from 'react-redux';

const songDetail = ({ song }) => {
    if(!song){
        return <div>Select a Song</div>
    }
    return (
        <div>
        <h3>Song Detail:</h3>
        <p>
        Title: { song.title } <br/>
        Duration: { song.duration }
        </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{ song: state.selectedSong };
}

export default connect(mapStateToProps)(songDetail);