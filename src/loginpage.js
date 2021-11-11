import  Axios  from "axios";
import React, { useState ,useContext } from "react";
import './CSSComponents/loginpage.css';
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import {usercontext} from './Context/usercontext';

import Calender from './calendar';

const Login = () => {
const {notloggedin,setloginstatus,userid,setuserid}=useContext(usercontext);    
const [useremail,setuseremail]=useState("");
const [password,setpassword]=useState("");
const [lmail,setlmail]=useState("");
const [pass,setpass]=useState("");
const [message,setmessage]=useState("");

const registeruser=()=>{
    console.log(useremail+password);
    Axios.post("https://planzap.herokuapp.com/usercreate",{
        useremail:useremail,
        password:password}).then(()=>{console.log("SUCCESS USER ADDED")})
}
const loginuser=()=>{
    Axios.post("https://planzap.herokuapp.com/userlogin",{
        useremail:lmail,
        password:pass}).then((response)=>{
            if(response.data.message)
            {
setmessage(response.data.message);
            }
        else
        {      
            setuserid(response.data[0].userid);

            setloginstatus(false);
               
        }

        })

}

  return <div className="loginpage">
      <div style={{position:"Absolute",marginTop:"5vh",fontSize:"15vh",fontFamily:"serif",fontWeight:"bolder",color:"red",textAlign:"center",marginLeft:"37vw"}} >PlanZap</div>
<div className="loginbox">
    <div className="signinbox">
        <div className="heading">
            Login
            </div>
            <br/>
            <br/>

        <label for="emailid"><b>E-Mail ID</b></label>
        <br/>
        
    <input type="email" id="emailid" maxlength="40" name="emailid" className="holders" placeholder="Eg:abc@gmail.com" onChange={(event)=>{setlmail(event.target.value)}}/>
    <br/>
    <br/>
    <label for="lpassword"><b>Password</b></label>
        <br/>
    <input type="password" id="lpassword" maxlength="40" name="password" className="holders"  onChange={(event)=>{setpass(event.target.value)}}/>
    <br/>
<br/>
<br/>
<button style={{backgroundColor:"teal", height:"4vh",width:"4vw",borderRadius:"10%",marginLeft:"10vw"}} onClick={loginuser}><b>Sign In</b></button>
            <div>{message}</div>
        </div>
        <div className="signinbox">
        <div className="heading">
            Register
            </div>
            <br/>
           

        <form autocomplete="false"   >
        <label for="emailid"><b>E-Mail ID</b></label>
        <br/>
        
    <input  type="email" id="emailid" maxlength="40" name="hidden" autocomplete="false"  className="holders" placeholder="Eg:abc@gmail.com" onChange={(event)=>{setuseremail(event.target.value)}} />
    <br/>
    <br/>
    <label for="password"><b>Password</b></label>
        <br/>
    <input   type="password" id="password" maxlength="10" name="password"  autocomplete="new-password" className="holders"  />
    <br/>
<br/>
<label for="Cpassword"><b>Confirm Password</b></label>
        <br/>
    <input type="password" id="Cpassword" maxlength="10" name="Cpassword" className="holders" onChange={(event)=>{setpassword(event.target.value)}} />
    <br/>
<br/>
<br/>

<button style={{backgroundColor:"teal", height:"4vh",width:"4.9vw",borderRadius:"10%",marginLeft:"10vw"}} onClick={registeruser}><b>Sign Up</b></button>
            </form>
            </div>
    </div>

  </div>;
};

export default Login;