import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannel } from './appSlice';
import "./SidebarChannel.css";


function SidebarChannel({id, channel}) {
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        dispatch(setChannel({id: id, channel: channel}))
    }
    return (
        <div className="sidebarChannel" onClick={handleClick}>
            <h4><span className="sidebarChannelHash">#</span>{channel}</h4> 
        </div>
    )
}

export default SidebarChannel;
