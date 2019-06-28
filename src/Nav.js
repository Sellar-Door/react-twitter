import React from 'react';
import './Nav.css';
import { ProfilePic } from './App';


export const Navibar = (props) => {
    return ( 
        <div className="Nav-bar sticky"> 

            <div className="Nav-bar-width">

            <div className="Nav-section-left">

                <div className="Nav-bar-box">
                    
                        <i className="fas fa-home navIcon"></i>
                    
                        <NavItem content="Home"/>
                    
                </div>

                <div className="Nav-bar-box">
                    
                        <i className="fas fa-bolt navIcon"></i>
                      
                        <NavItem content="Moments" />
                    
                </div>

                <div className="Nav-bar-box">
                    
                        <i className="far fa-bell navIcon"></i>
                        
                        <NavItem content="Notifications" />
                   
                </div> 

                <div className="Nav-bar-box">
                   
                        <i className="far fa-envelope navIcon"></i>
                        
                        <NavItem content="Messages" />
                   
                </div>

            </div>

            <div className="birdy">
                <i class="fab fa-twitter"></i>
            </div>

            <div className="Nav-section-right">
                {/* <NavItem content="Birdy" /> */}
                    {/* <div>
                    <NavItem content="Search" />
                    </div> */}

                    <div id="Nav-search-wrap">
                    <form id="Nav-search" className="Form-search" action="/search" role="search">
                        <input id="search-query" className="search-input Search-box" type="text" placeholder="Search Twitter" />
                    <buton className="icon" type="submit">
                    </buton>
                        </form>
                    </div>

                <ProfilePic data={props.data.tweets} />
                <div className="Nav-tweet">
                <NavItem content="Tweet" />
                </div>
            </div>

            </div>
        </div>
    )
}

const NavItem = (props) => {
    return (
        <div className="navItem">
            <span className="navIcon"></span>
            <span className="navText">{props.content}</span>
        </div>
    )
}









