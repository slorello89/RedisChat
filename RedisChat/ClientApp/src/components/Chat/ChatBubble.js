import React, {Component} from "react";
import './ChatBubble.css'
export class ChatBubble extends Component{
    render(){
        return(
            <div className={"chat-bubble"}>
                <p key="sender">From: <span className="sender-name">{this.props.message.senderName}</span></p>
                <p key="message">{this.props.message.messageText}</p>    
            </div>            
        )
    }
}