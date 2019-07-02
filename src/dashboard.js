import React from 'react';
import './dashboard.css'
import './card.css'
// import { ProfilePic } from './App';


export const Dashboard = (props) => {
    return ( 
      <div className="dashboard">
          <img className="dashboardpic" src="https://media.licdn.com/dms/image/C4D03AQEBclsPZsvy6Q/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=4bv71wammrqEL5Wl6Y8_NxEXoQOwo9vyW_VZ7DiLs1E"/>
          <p className="name">Dylan Jones</p>
          <p className="user">@dylanjones</p>
          <div className="item">
          <DashboardItem name="Tweets" content="100" />
          <DashboardItem name="Following" content="230" />
          <DashboardItem name="Followers" content="540" />
          </div>
          <Trends  />
          </div>
    )

}

export const Trends = (props) => {
    return ( 
      <div className="trends">
        <p>This is trends box</p>
          </div>
    )

}

const DashboardItem = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p className="stats">{props.content}</p>
        </div>
    )
}


