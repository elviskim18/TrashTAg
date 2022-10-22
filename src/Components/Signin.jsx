import { useNavigate } from 'react-router-dom';
import axios from "../API/axios"
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';



function Signin (){
    const navigate = useNavigate()

    const [formdata, setformdata] = useState({
        username:"",
        password:""
    })
    
    const { mutate } = useMutation(login, {
        onSuccess: () =>{
            localStorage.setItem("authenticated", JSON.stringify(true));
            navigate("/home/about")
        }
    })

    async function login (formdata){
        await axios.post("/login", formdata).then((res)=>{
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
         <h2>WELCOME BACK...</h2>
         <h4>Please enter your email and password</h4>
         <form onSubmit={handlesubmit}>
            <input type="text" id="username" name="username" placeholder="Username"  value={formdata?.username} onChange={handleChange}/>
            <input type="password" id="password" name="password" placeholder="Password" value={formdata?.password} onChange={handleChange}/>
            <button className="submit" >Login</button>
        </form> 
        <h5>Don’t have an account yet? </h5>
        <p onClick={()=>navigate('signup')}>Create Account</p>
        </>
       
      
      
    )
}

export default Signin