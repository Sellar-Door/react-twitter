import React from 'react';
import './dashboard.css'
import './card.css'
// import { ProfilePic } from './App';


export const Dashboard = (props) => {
    return ( 
      <div className="dashboard">
          <img className="dashboardpic" src="https://media.licdn.com/dms/image/C5603AQGrpxCpSWN6zw/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=xjbGMH9tCiOxgm2WuJ4YliuIfALroxGv28JvywC6VOw"/>
          <span className="name">Misha Cardenas</span><br></br>
          <span className="user">@mishacardenas</span>
          <DashboardItem content="Tweets" />
          <DashboardItem content="Following" />
          <DashboardItem content="Followers" />
          </div>
    )

}

const DashboardItem = (props) => {
    return (
        <div className="item">
            <span>{props.content}</span>
        </div>
    )
}
