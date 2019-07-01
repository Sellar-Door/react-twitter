import React from 'react';
import './dashboard.css'
import './card.css'
// import { ProfilePic } from './App';


export const Dashboard = (props) => {
    return ( 
      <div className="dashboard">
          <img className="dashboardpic" src="https://media.licdn.com/dms/image/C5603AQGrpxCpSWN6zw/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=xjbGMH9tCiOxgm2WuJ4YliuIfALroxGv28JvywC6VOw"/>
          <p className="name">Misha Cardenas</p>
          <p className="user">@mishacardenas</p>
          <DashboardItem content="Tweets" />
          <DashboardItem content="Following" />
          <DashboardItem content="Followers" />
          <Trends content="trends" />
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
        <div className="item">
            <p>{props.content}</p>
        </div>
    )
}


