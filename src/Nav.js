import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import { ProfilePic } from './App';


export const Navibar = (props) => {
    return ( 
        <div className="Nav-bar"> 
            <div className="Nav-section-left">
                <i class="fas fa-home"></i>
                <NavItem content="Home"  />
                <i class="fas fa-bolt"></i>
                <NavItem content="Moments" />
                <i class="far fa-bell"></i>
                <NavItem content="Notifications" />
                <i class="far fa-envelope"></i>
                <NavItem content="Message" />
            </div>

            

            <div className="Nav-section-right">
                <NavItem content="Birdy" />
                <NavItem content="Search" />
                <ProfilePic data={props.data.tweets} />
            </div>
        </div>
    )
}

const NavItem = (props) => {
    return (
        <div className="navItem">
            <img className="navIcon"  />
            <span className="navText">{props.content}</span>
        </div>
    )
}







