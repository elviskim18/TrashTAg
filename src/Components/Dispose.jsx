import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { BsChat } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';
import Test from "../images/test.png"
import axios from '../API/axios';
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function Dispose() {

  const QueryClient = useQueryClient()

  const [visible ,setvisible] = useState(false)
  



  const [account, setAccount] = useState({})

  const [formdata, setformdata] = useState({
    description:"",
    image:""
  })

  useEffect(() =>{
    const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setAccount(loggedUser);

  },[])

  async function getPosts(){
    const {data} = await axios.get('/posts')
    return data
  }

  const {data:posts, isLoading} = useQuery(["posts"], () => getPosts())


  const { mutate } = useMutation(post, {
    onSuccess: () =>{
      QueryClient.invalidateQueries(["posts"]);
      setformdata({
        description:"",
        image:""
      })
    }
   })

   async function post (formdata){
    await axios.post("/posts", formdata)
    }
  

  //hangle change event
    const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setformdata({ ...formdata, [key]: value });
    };

    function handlesubmit(e){
      e.preventDefault()
      mutate(formdata)


    }


  return (
    <div className="Dispose">
      <div className="Title">
        <h3>DISPOSE OFF</h3>
      </div>
      <div className="Tweet">
        <div className="lEFT">
          {posts?.map(post => (
            <div className="pOST" key={post?.id}>
            <div className='uSERNAME'>
             <Avatar>
                <AvatarImage
                  src={post?.user?.avatar}
                  alt="Colm Tuite"
                  className="tESTING"
                />
                 <AvatarFallback delayMs={600}>CT</AvatarFallback>
              </Avatar>
                <p>{post?.user?.username}<span>time</span></p>
            </div>
            <div className='dESCRIPTION'>
                <p>{post?.description}</p>
            </div>
            <div className='iMAGE'>
             <img src={post?.image} alt='img'className='i-image'/>
            </div>
            <div className='cALL'>
                <div><BsChat/></div>
                <div className='phone'><FiPhone onClick={() => setvisible((visible) => !visible)}/></div>
                <div className={visible ? "post-number" : "close-number"}>
                  <p>{post.user.phone}</p></div>
            </div>
        </div>

          ))}
          
          
        </div>
        <div className="rIGHT">
          <form >
            <input type="text" placeholder="Search Tag" name="search" className='Search'/>
          </form>
          <div className='nEW'>
              <div className='dp'>
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Colm Tuite"
                  className="tESTING"
                />
                 <AvatarFallback delayMs={600}>CT</AvatarFallback>
              </Avatar>
                  <p>{account?.username}</p>
              </div>
              <form onSubmit={handlesubmit}>
                 <input type="text" placeholder="What are you disposing ?" name="description"  value={formdata?.description} className='dISPOSE' onChange={handleChange}/>
                 <input type="text" placeholder="Add Image" name="image" className='dISPOSE' value={formdata?.image} onChange={handleChange}/>
                 <button>DISPOSE OFF</button>
              </form>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dispose