import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import PhoneIcon from '@material-ui/icons/Phone';
import SettingsIcon from '@material-ui/icons/Settings';
import MicIcon from '@material-ui/icons/Mic';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Avatar } from '@material-ui/core';
import db, { auth } from "../app/firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function Sidebar() {
    const logOut = ()=>{
        auth.signOut();
    }
    const currentUser = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    const handleAddChannel = ()=>{
        let channelName = prompt("Enter channel name");
        if (channelName) {
            db.collection("channels").add({channelName});
        } else {
            console.log("didnt enter");
        }
    }

    useEffect(()=>{
        db.collection("channels").onSnapshot((snapshot)=>{
            console.log("changed");
            setChannels(snapshot.docs.map((doc)=>({
                id: doc.id,
                channel: doc.data()

            })))
        })
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <h3>Discord</h3>
                <ExpandMoreIcon  />
            </div>
            <div className="sidebarChannels">
                <div className="sidebarChannelsHeader">
                    <div className="sidebarChannelsContent">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebarAddChannel" />
                </div>
                <div className="sidebarChannelsList">
                    {channels.map((ch)=>{
                        console.log(ch)
                        return <SidebarChannel key = {ch.id} id={ch.id} channel={ch.channel.channelName}  />
                    })}
                </div>
            </div>
            <div className="sidebarVoice">
                <SignalCellularAltIcon className="sidebarVoice_icon"/>
                <div className="sidebarVoiceInfo">
                    <h5>Voice connected</h5> 
                    <span>stream</span>
                </div>
                <div className="sidebarVoiceIcons">
                    <AccessAlarmIcon />
                    <PhoneIcon />
                </div>
            </div>
            <div className="profileSection">
                {/* avatar */}
                <Avatar onClick={logOut}  src={currentUser.photo} />
                <h6>{currentUser.displayName}</h6>
                <div className="profileSectionIcons">
                    {/* microphone */}
                    <MicIcon />

                    {/* github */}
                    <GitHubIcon />

                    {/* settings */}
                    <SettingsIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
