import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeaderLeft">
                <h4><span className="chatHeaderHash">#</span> Channel Name </h4>
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
