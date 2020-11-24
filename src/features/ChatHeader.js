import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectChannel } from './appSlice'

function ChatHeader() {
    const currentChannel = useSelector(selectChannel);
    return (
        <div className="chatHeader">
            <div className="chatHeaderLeft">
                <h4><span className="chatHeaderHash">#</span> {currentChannel?.channel || "No channels selected"} </h4>
            </div>
            <div className="chatHeaderRight">
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />
            <div className="chatHeaderSearch">
                <input type="text"/>
                <SearchRounded />
            </div>
                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
