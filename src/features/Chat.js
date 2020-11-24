import { Add, EmojiEmotions, GifRounded, PictureInPicture } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import db from '../app/firebase';
import { selectChannel, selectId } from './appSlice';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import Message from './Message';
import { selectUser } from './userSlice';
import firebase from 'firebase';

function Content() {
    const currentChannel = useSelector(selectChannel);
    const currentChannelId = useSelector(selectId)
    const currentUser = useSelector(selectUser);
    const [messages, setMessages] = useState([])
    const scrollRef = useRef(null);
    const [input, setInput] = useState("");
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(currentChannelId)
        db.collection("channels").doc(currentChannelId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: currentUser
        })
        setInput("");
    }

    useEffect(()=>{
        if(currentChannelId){
            db.collection("channels").doc(currentChannelId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot)=>{
                console.log(snapshot);
                setMessages(snapshot.docs.map((doc)=>doc.data()));
            })
        }
    }, [currentChannelId]);

    useEffect(()=>{
       scrollRef.current.scrollIntoView({behavior: "smooth" })
    },[messages])
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chatMessages">
            {messages.map((message)=>{
                  return <Message message={message.message} timestamp={message.timestamp} user={message.user} />
                })}
                <div ref={scrollRef}></div>
            </div>
            <div className="chatInput">
                <Add />
                <form onSubmit = {handleFormSubmit}>
                <input type="text" value={input} onChange={(e)=>{ setInput(e.target.value)}} placeholder="enter message"/>
                <button  className ="chatInputButton" type="submit">Submit</button>
                </form>
                <PictureInPicture />
                <GifRounded />
                <EmojiEmotions />
            </div>
        </div>
    )
}

export default Content
