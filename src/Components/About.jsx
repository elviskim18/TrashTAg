import React from 'react'
import { GiBroom, GiVibratingSmartphone } from 'react-icons/gi';
import { BsChatRightText } from 'react-icons/bs';
import { MdDownloadDone} from 'react-icons/md';


function About() {
  return (
    <div className='About'>
        <div className='component-one'>
            <div className='sign'><GiVibratingSmartphone/> </div>
            <h2>1. You report an illegal dump</h2>
            <p>You have found an illegal dump, took a picture and reported it using Trash TAG App</p>
        </div>
        <div className='component-two'>
            <div className='sign'><BsChatRightText/> </div>
            <h2>2. Relevant people get notified</h2>
            <p>Environmental organizations, municipalities and interested individuals who subscribed to receiving notifications will be notified</p>
        </div>
        <div className='component-three'>
            <div className='sign'><GiBroom/> </div>
            <h2>3.Cleaning event is organised</h2>
            <p>Environmental organizations, municipalities and interested individuals organise a clearing up event</p>
        </div>
        <div className='component-four'>
            <div className='sign'><MdDownloadDone/> </div>
            <h2>4.Dump you reported is cleaned up</h2>
            <p>After the event you will be notified that the dump you've reported has been cleaned up.On to the next one!</p>
        </div>

    </div>
  )
}

export default About