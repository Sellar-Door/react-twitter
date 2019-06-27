import React, { Component } from 'react';
import { Navibar } from './Nav'

import './App.css';
import './card.css'

import data from './data.json'

class App extends Component {
    render () {
        return (
            <div>
             <Navibar data={data}/>
             <Column className="column" />

            </div>
        )
    }
}

const Column = (props) => {
    return (
        <div>
        { data.tweets.map(card => <Card className="card" data={card} />) }
      </div>
    )
}

const Card = props => {
    return ( 
        <div>
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
            <Verified data={props.data} />
            <span>@</span>
            <UserName data={props.data}/>
            <span>.</span>
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


            <i class="far fa-comment"></i>
          <Replies data={props.data} />
          <i class="fas fa-retweet"></i>
          <Retweets data={props.data} />
          <i class="far fa-heart"></i>
          <Likes data={props.data} />
          <i class="far fa-envelope"></i>
      </div>
  )
}


export const ProfilePic = (props) => {
  return (
    <div className="images">
      <img className="imagesround" src={props.data.ProfilePic} />
    </div>
  )
}

const DisplayName = (props) => {
  return (
    <div>
      <span>{props.data.DisplayName} </span>
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
      <span>{props.data.UserName} </span>
    </div>
  )
}

const TimeStamp = (props) => {
  return (
    <div>
      <span>{props.data.TimeStamp } </span>
    </div>
  )
}

const Text= (props) => {
  return (
    <div>
      <span>{props.data.Text } </span>
    </div>
  )
}

const Image= (props) => {
  return (
    <div>
      <span>{props.data.Image } </span>
    </div>
  )
}

const  Replies= (props) => {
  return (
    <div>
      <span>{props.data.Replies } </span>
    </div>
  )
}

const Retweets= (props) => {
  return (
    <div>
      <span>{props.data.Retweets } </span>
    </div>
  )
}

const Likes= (props) => {
  return (
    <div>
      <span>{props.data.Likes } </span>
    </div>
  )
}


export default App