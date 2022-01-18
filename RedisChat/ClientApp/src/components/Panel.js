import React, { Component } from 'react';
import {ChannelGrid} from "./Channels/ChannelGrid";

import {Chat} from "./Chat/Chat";
import './Panel.css'
export class Panel extends Component{
    render(){
        return(
            <div className="flex-container">
                <ChannelGrid/>
                <Chat/>
            </div>
        )
    }
}