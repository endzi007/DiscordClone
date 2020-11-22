import React from 'react'
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
function Sidebar() {
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
                    <AddIcon className="sidebarAddChannel" />
                </div>
                <div className="sidebarChannelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
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
                <Avatar />
                <h6>Enis Jašarović</h6>
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
