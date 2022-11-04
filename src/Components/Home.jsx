import React, {useState} from 'react'
import { MdLocationPin } from 'react-icons/md';
import { FiFlag } from 'react-icons/fi';
import { FaPeopleCarry } from 'react-icons/fa';




import Toon from "../images/toon.png"
import Tap from './Tap';

function Home() {
    const [visible ,setvisible] = useState(false)
    const [formdata, setformdata] = useState({
        description:"",
        image:"",
        latitude:'',
        longitude:''
    })

    const [mylocation, setmylocation] = useState({
        latitude:0,
        longitude:0
    })

    //   function getlocation(){
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //     setformdata({...formdata,latitude:pos.coords.latitude, longitude:pos.coords.longitude})
    //     console.log(pos.coords.longitude)
    //     })
    //   }
    // console.log(mylocation)

    //handleChange
    function handleChange(event){
     const key = event.target.name;
      const value = event.target.value;
      setformdata({ ...formdata, [key]: value });
    }
    //handlesubmit
    function handleSubmit(event){
        event.preventDefault();
        console.log(formdata)
    }

  return (
    <div className='Home'>
        <div className='top'>
            <div className='map'>
                <Tap setformdata={setformdata} formdata={formdata}/>
            </div>
            <div className='side-img'>
             <img src={Toon} alt='toon'className='toon'/>
            </div>
        </div>
        <div className='post'>
            <button onClick={() => setvisible((visible) => !visible)}>POST TRASH</button>
            <form onSubmit={handleSubmit} className={visible ? "post-form" : "close"} >
                <p>Kindly fill in the details below</p>
            <input type="text" id="description" name="description" placeholder="Description" value={formdata?.description} onChange={handleChange}/>
            <input type="text" id="image" name="image" placeholder="Image Url" value={formdata?.image} onChange={handleChange}/>
            <button className="done">GET LOCATION</button>
           
            <button type='submit' className="done" >SAVE</button>
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