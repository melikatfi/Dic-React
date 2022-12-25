import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactAudioPlayer from 'react-audio-player';

export default function Result(props){
    console.log(props)
    return (
        <div>
            {props.props.text}
            <br /><br />
            <ReactAudioPlayer
            src={props.props.audio}
            controls
            />
        </div>
    )
}