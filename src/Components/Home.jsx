import React, {useState} from 'react'
import { MdLocationPin } from 'react-icons/md';
import { FiFlag } from 'react-icons/fi';
import { FaPeopleCarry } from 'react-icons/fa';



import Toon from "../images/toon.png"
import Tap from './Tap';

function Home() {
    const [visible ,setvisible] = useState(false)
  return (
    <div className='Home'>
        <div className='top'>
            <div className='map'>
                <Tap/>
            </div>
            <div className='side-img'>
             <img src={Toon} alt='toon'className='toon'/>
            </div>
        </div>
        <div className='post'>
            <button onClick={() => setvisible((visible) => !visible)}>POST TRASH</button>
            <form  className={visible ? "post-form" : "close"} >
                <p>Kindly fill in the details below</p>
            <input type="text" id="description" name="description" placeholder="Description" />
            <input type="text" id="image" name="image" placeholder="Image Url"/>
            <input type="text" id="latitude" name="latitude" placeholder="Latitude"/>
            <input type="text" id="longitude" name="longitude" placeholder="Longitude"/>
            <button className="done" >SAVE</button>
        </form>  
        </div>

        <div className='stats'>
            <div className='location'>
                <div className='con'> <MdLocationPin/> </div>
                <div className='num'> 50,000 +</div>
                <div>Illegal dumps reported</div>
            </div>
            <div className='location'>
                <div className='con'> <FiFlag/> </div>
                <div className='num'> 8,000 +</div>
                <div>Illegal dumps cleaned</div>
            </div>
            <div className='location'>
                <div className='con'> <FaPeopleCarry/> </div>
                <div className='num'> 40,000 +</div>
                <div>Community volunteers</div>
            </div>
        </div>

    </div>
  )
}

export default Home