import React, {Component} from "react";
import './Chat.css'
import authService from '../api-authorization/AuthorizeService'
import {ChatBubble} from "./ChatBubble";
export class Chat extends Component{
    state={
        messages: null
    }
    componentDidMount() {
        this._asyncRequest = this.GetMessages().then(
            messages=>{
                console.log(messages)
                this._asyncRequest = null;
                this.setState({messages});
            }
        )
    }

    componentWillUnmount() {        
    }

    async GetMessages(){
        const token = await authService.getAccessToken();
        const result =  (await (await fetch('Messages?channelName=foo', {
            headers: !token ? {} : {'Authorization':`Bearer ${token}`}
        })).json())
        console.log(result);
        return result['messages'];
    }
    
    render() {
        if(this.state.messages === null){
            return(
                <div>
                    Loading. . . 
                </div>
            )
        }
        // console.log(this.props)
        console.log(this.state.messages);
        return(            
            <ul className="chat-list">
                {this.state.messages.map((item, index)=>{
                    return(
                        <ChatBubble key={index} message={item}/>
                    )
                })}
            </ul>
        )
    }

}