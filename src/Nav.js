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
               
                    <div id="Nav-search-wrap">
                            
                            <div className="search">
                            <input className="Search-box" type="text" placeholder="Search Twitter"/>
                            <span className="fa fa-search"></span>
                            </div>
                    </div>

                        <div id="UserPic"> 
                        <img className="Nav-user-image" src="https://media.licdn.com/dms/image/C4D03AQEBclsPZsvy6Q/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=4bv71wammrqEL5Wl6Y8_NxEXoQOwo9vyW_VZ7DiLs1E"/>

                    </div>

                <div className="Nav-tweet">
                    <div className="navtweetText">
                        <NavItem content="Tweet" styling="true" />
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

const NavItem = (props) => {
    return (
        <div className={props.styling ? "navItem tweetButton" : "navItem"}>
            <p className="navIcon"></p>
            <p className="navText">{props.content}</p>
        </div>
    )
}









