import React from 'react';
import './Nav.css';
import { ProfilePic } from './App';


export const Navibar = (props) => {
    return ( 
        <div className="Nav-bar sticky"> 

            <div className="Nav-bar-width">

            <div className="Nav-section-left">
                <i class="fas fa-home navIcon"></i>
                <NavItem content="Home"/>
                <i class="fas fa-bolt navIcon"></i>
                <NavItem content="Moments" />
                <i class="far fa-bell navIcon"></i>
                <NavItem content="Notifications" />
                <i class="far fa-envelope navIcon"></i>
                <NavItem content="Messages" />
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
                        <input id="search-query" class="search-input" type="text" placeholder="Search Twitter" />
                    <buton class="icon" type="submit">
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









