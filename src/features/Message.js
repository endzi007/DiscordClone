import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css";
function Message({ user, message, timestamp }) {
    return (
        <div className="chatMessage">
            <Avatar src={user.photo}  />
            <div className="chatMessageContent">
                <div className="chatMessageContentTop">
                    <h4>{user.displayName}</h4>
    <h6>{new Date(timestamp?.toDate()).toUTCString()}</h6>
                </div>
                <div className="chatmessageContentBottom">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Message
