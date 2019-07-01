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
            <div >
             <Navibar data={data}/>

                  <div className="layoutcolumn">

                      <div className="bodycolumn">
                        <Dashboard className="dashboard"/>
                      </div>

                      <div className="bodycolumn">
                        <Column className="column" />
                      </div>

                      <div className="bodycolumn">
                          <Footer className="footer"/>
                          <Footer2 className="footer2" />
                          <WhoToFollow className="whotofollow" />
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
            <span className="at">@</span>
            <UserName data={props.data}/>
            <span className="bullet">·</span>
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
      <span className="displayName">{props.data.DisplayName} </span>
    </div>
  )
}

const Verified = (props) => {
  return (
    <div>
      <span>{props.data.Verified} </span>
    </div>
  )
}

const UserName = (props) => {
  return (
    <div>
      <span className="username">{props.data.UserName} </span>
    </div>
  )
}

const TimeStamp = (props) => {
  return (
    <div>
      <span className="timeStamp">{props.data.TimeStamp } </span>
    </div>
  )
}

const Text= (props) => {
  return (
    <div>
      <span className="tweetText">{props.data.Text } </span>
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
      <span>{props.data.Replies } </span>
    </div>
  )
}

const Retweets= (props) => {
  return (
    <div className="retweets">
      <span>{props.data.Retweets } </span>
    </div>
  )
}

const Likes= (props) => {
  return (
    <div className="likes">
      <span>{props.data.Likes } </span>
    </div>
  )
}


export default App