import React, {Component} from "react";
import './ChannelGrid.css'
import authService from '../api-authorization/AuthorizeService'
import {Link} from "react-router-dom";
export class ChannelGrid extends Component{
    state = {
        channels: null
    }
    
    componentDidMount() {
        this._asyncRequest = this.GetChannels().then(
            channels=>{
                this._asyncRequest = null;
                this.setState({channels})
        });
    }
    
    componentWillUnmount() {
        if(this._asyncRequest){
            this._asyncRequest.cancel();
        }
    }

    async GetChannels(){
        const token = await authService.getAccessToken();
        return (await (await fetch('Channels', {
            headers: !token ? {} : {'Authorization' : `Bearer ${token}`}
        })).json())['channels']
        
    }

    render() {
        if (this.state.channels === null){
            return(
                <nav className="nav-menu">
                    Loading. . . 
                </nav>
            )
        }
        return (            
            <nav className="nav-menu">                
                <ul className="nav-menu-items">
                    {this.state.channels.map((item, index)=>{
                        return(
                            <li key={index} className="nav-text">                                
                                <Link to={`/#channel=${item}`}>
                                    <span>{item}</span>
                                </Link>
                            </li>
                        )
                    })};
                </ul>
            </nav>
        );
    }
}