import React from 'react';
import "./sidebar.css";
import  DonutLargeIcon from '@material-ui/icons/DonutLarge';
import  ChatIcon  from '@material-ui/icons/Chat';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar,IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import Sidebarchat from './Sidebarchat';
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_headerRight">
                    <Avatar src=''/>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton> 
                    <IconButton>
                        <ChatIcon/>
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton> 
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="search or start a new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chat">
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
            </div>
        </div>
    )
}

export default Sidebar;