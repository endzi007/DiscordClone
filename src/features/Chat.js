import { Add, EmojiEmotions, GifRounded, PictureInPicture } from '@material-ui/icons';
import React from 'react'
import "./Chat.css";
import ChatHeader from './ChatHeader';
import Message from './Message';
function Content() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chatMessages">
                <Message />
            </div>
            <div className="chatInput">
                <Add />
                <form>
                <input type="text" placeholder="enter message"/>
                <button className ="chatInputButton" type="submit">Submit</button>
                </form>
                <PictureInPicture />
                <GifRounded />
                <EmojiEmotions />
            </div>
        </div>
    )
}

export default Content
