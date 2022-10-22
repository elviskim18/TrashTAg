
import { Outlet,  } from 'react-router-dom';
import logo from '../images/homepage.png';


function Login() {
    
  return (
    <div className="App">
      <div className="left">
          <h1>TRASH TAG</h1>
          <img src={logo} alt='wewe'className='image'/>
      </div>
      <div className="right">
        <Outlet/>
        
      </div>

      
    </div>
  );
}

export default Login;