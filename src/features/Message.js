import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css";
function Message() {
    return (
        <div className="chatMessage">
            <Avatar />
            <div className="chatMessageContent">
                <div className="chatMessageContentTop">
                    <h4>Enis Jašarović</h4>
                    <h6>date</h6>
                </div>
                <div className="chatmessageContentBottom">
                    Message
                </div>
            </div>
        </div>
    )
}

export default Message
