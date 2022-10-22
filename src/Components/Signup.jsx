import { useNavigate } from 'react-router-dom';
import axios from "../API/axios"
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';





function Signup() {
    const navigate = useNavigate()

    const [formdata, setformdata] = useState({
      name:"",
      username:"",
      avatar:"",
      phone:"",
      password:""
    })

    const { mutate } = useMutation(login, {
      onSuccess: () =>{
          localStorage.setItem("authenticated", JSON.stringify(true));
          console.log("success!")
          navigate("/home/about")
      }
    })

    async function login (formdata){
      await axios.post("/signup", formdata).then((res)=>{
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("token", JSON.stringify(res?.data?.token));
        console.log(res.data)
      })
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
    <>
         
         <form onSubmit={handlesubmit} className="formtest" >
         <h2>CREATE ACCOUNT</h2>
         <h4>Enter your details blow</h4>
         <h5>OR</h5>    
         <p  onClick={()=>navigate('/login')}>Login?</p>
            
            <input type="text" id="name" name="name" placeholder="Name" value={formdata?.name} onChange={handleChange}/>
            
            <input type="text" id="username" name="username" placeholder="Username" value={formdata?.username} onChange={handleChange}/>

            <input type="text" id="avatar" name="avatar" placeholder="Avatar" value={formdata?.avatar} onChange={handleChange}/>

            <input type="number" id="phone" name="phone" placeholder="Phone Number" value={formdata?.phone} onChange={handleChange}/>
        
            <input type="password" id="password" name="password" placeholder="Password" value={formdata?.password} onChange={handleChange}/>
      
            <button className="submit">SIGNUP</button>
        </form> 
       
        
       
        </>
  );
}

export default Signup;