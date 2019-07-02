import React, { Component } from 'react';
import { Navibar } from './Nav'
import {Dashboard} from './dashboard.js'
import {Footer} from './footer.js'
import {Footer2} from './footer.js'
import {WhoToFollow} from './footer.js'

import './App.css';
import './card.css'



import data from './data.json'

class App extends Component {
    render () {
        return (
            <div>
             <Navibar data={data}/>

                  <div className="layoutcolumn">


                      <div className="bodycolumn">
                        <Dashboard className="dashboard"/>
                      </div>

<<<<<<< HEAD
                      <div className="bodycolumn">
=======

                      <div className="bodycolumn main-column">

>>>>>>> 5b3b6d1294c3c3a423bf0b5e05b8a2386254e3e0
                        <Column className="column" />
                        </div>
                        

                        {/* <div className="bodycolumn">
                        <Dashboard className="dashboard"/>
                      </div> */}

                      <div className="bodycolumn">
                         <WhoToFollow className="whotofollow" />
                          <Footer className="footer"/>
                          <Footer2 className="footer2" />
                          
                      </div>
                  </div>


                 </div>

                 </div>
            
        )
    }
}

const Column = (props) => {
    return (
        <div className="column">
        { data.tweets.map(card => <Card data={card} />) }
      </div>
    )
}

const Card = props => {
    return ( 
        <div className="card">
            <UserData data={props.data}/>
            <Tweet data={props.data}/>
            <Engagement data={props.data}/> 
        </div>
    )
}

const UserData = (props) => {
    return (
        <div className="userData">
            <ProfilePic data={props.data} />
            <DisplayName data={props.data} />
            {/* <Verified data={props.data} /> */}
            <p className="at">@</p>
            <UserName data={props.data}/>
            <p className="bullet">·</p>
            <TimeStamp data={props.data} />
        </div>
    )
}

const Tweet = (props) => {
  return (
      <div className="tweet">
          <Text data={props.data} />
          <Image data={props.data} />
      </div>
  )
}


const Engagement = (props) => {
  return (
      <div className="engagement"> 
      <div className="repliesDiv">
          <i className="far fa-comment comments"></i>
          <Replies data={props.data} />
          </div>
          <div className="retweetDiv">
          <i class="fas fa-retweet retweetIcon"></i>
          <Retweets data={props.data} />
          </div>
          <div className="likeDiv">
          <i class="far fa-heart likesIcon"></i>
          <Likes data={props.data} />
          </div>
          <div className="envelopeDiv">
          <i class="far fa-envelope envelope"></i>
          </div>
      </div>
  )
}


export const ProfilePic = (props) => {
  return (
    <div>
      <img className="profilePic" src={props.data.ProfilePic} />
    </div>
  )
}

const DisplayName = (props) => {
  return (
    <div>
      <p className="displayName">{props.data.DisplayName} </p>
    </div>
  )
}

const Verified = (props) => {
  return (
    <div>
      <p>{props.data.Verified} </p>
    </div>
  )
}

const UserName = (props) => {
  return (
    <div>
      <p className="username">{props.data.UserName} </p>
    </div>
  )
}

const TimeStamp = (props) => {
  return (
    <div>
      <p className="timeStamp">{props.data.TimeStamp } </p>
    </div>
  )
}

const Text= (props) => {
  return (
    <div>
      <p className="tweetText">{props.data.Text } </p>
    </div>
  )
}

const Image= (props) => {
  return (
    <div>
      <img className="tweetImage" src={props.data.Image} />
    </div>
  )
}

const  Replies= (props) => {
  return (
    <div className="replies">
      <p>{props.data.Replies } </p>
    </div>
  )
}

const Retweets= (props) => {
  return (
    <div className="retweets">
      <p>{props.data.Retweets } </p>
    </div>
  )
}

const Likes= (props) => {
  return (
    <div className="likes">
      <p>{props.data.Likes } </p>
    </div>
  )
}


export default App