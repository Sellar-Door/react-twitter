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

                        {/* <form id="Nav-search" > */}
                            

                            <input className="Search-box fontAwesome" type="text" placeholder="Search Twitter; &#xf002"/>

                            {/* ; &#xf002 */}

                            <i className="fas fa-search "></i>
                            {/* searchMagGlass */}
                                
                                {/* <button className="icon" type="submit"></button> */}

                                {/* <img src="https://www.seekpng.com/ipng/u2q8r5r5u2e6w7i1_lens-clipart-magnifier-search-icon-png-grey/"/> */}

                        {/* </form> */}
                    </div>

                        <div id="UserPic"> 
                        <img className="Nav-user-image" src="https://media.licdn.com/dms/image/C5603AQGrpxCpSWN6zw/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=xjbGMH9tCiOxgm2WuJ4YliuIfALroxGv28JvywC6VOw"/>

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
            <span className="navIcon"></span>
            <span className="navText">{props.content}</span>
        </div>
    )
}









