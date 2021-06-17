import React from 'react';
import './sidebarchat.css';
import { Avatar,IconButton } from '@material-ui/core';

function Sidebarchat(){
    return <div className="sidebarchat">
                <IconButton><Avatar src=""/></IconButton>
                <div className="sidebarchat_info">
                    <h3>Room name</h3>
                    <p>This is a the last message</p>
                </div>
          </div>
}

export default Sidebarchat;