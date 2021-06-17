import React from 'react';
import { Avatar,IconButton } from '@material-ui/core'; 
import './chat.css';
import {AttachFile,MoreVert,SearchOutlined} from '@material-ui/icons';
import  InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat(){
    return(
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>last view at ...</p>
                </div>
                <div className="chat_headerRight">
                <IconButton>
                        <SearchOutlined/>
                    </IconButton> 
                    <IconButton>
                        <AttachFile/>
                    </IconButton> 
                    <IconButton>
                        <MoreVert/>
                    </IconButton> 
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Sonia</span>
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Sonia</span>
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_reciever  chat_message">
                    <span className="chat_name">Sonia</span>
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input  placeholder="enter your message" type="text"/>
                    <button  type="submit">
                        send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat;