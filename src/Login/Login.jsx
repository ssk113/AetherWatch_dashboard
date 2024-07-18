import "./Login.css";
import logoimg from "../assets/aetherwatch_logo.jpg";
import { useState } from "react";

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    return(
      <div className="login-page">
       <header>
        <span>
          from <i>Aetherwatch.</i>
        </span>
       </header>
       
       <img classNmae="logo" src={logoimg} alt="" />

       <h2 className="title">
         Admin <br />
         Dashboard
       </h2>

       <form>
        <div className="email">
            <input 
             onChange={(e) => setemail(e.target.value)}
             type="email" 
             id="email" 
             required 
            />
            <label htmlFor="email">email</label>
        </div>

        <div className="password">
            <input 
             onChange={(e) => setpassword(e.target.value)}
             type="password" 
             id="password"
             required 
            />
            <label htmlFor="password">password</label>
        </div>
       </form>
    </div>
   );
};
export default Login;