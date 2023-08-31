import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup(props){
    const navigate = useNavigate();
    const [signupData,setSignupData] = useState({name:'',email:'',password:'',confirm_password:''});
    const [signupErrors,setSignupErrors] = useState({name:'',email:'',password:'',confirm_password:''});
    const [showErrors,setShowErrors] = useState({name:false,email:false,password:false,confirm_password:false});
    const [isvalid,setIsValid] = useState(true);
    function signupHandler(event){
        const field = event.target.name;
        const value = event.target.value;
        setSignupData((prevsignupData)=>({...prevsignupData,[field]:value}));
        errorHandler(field,value);
    }
    function errorHandler(field,value){
      if(field==='confirm_password'){
        if(value!==signupData.password){
          console.log('confirm');
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:'Passwords do not match'}));
        }
        else{
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:''}));
        }
      }
      if(field==='name'){
        if(value===''){
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:'Name is required'}));
        }
        else{
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:''}));
        }
      }
      if(field==='email'){
        if(value===''){
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:'Email is required'}));
        }
        else{
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:''}));
        }
      }
      if(field==='password'){
        if(value===''){
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:'Password is required'}));
        }
        else{
          setSignupErrors((prevsignupErrors)=>({...prevsignupErrors,[field]:''}));
        }
        if(value!==signupData.confirm_password){
          setSignupErrors((prev)=>({...prev,confirm_password:'Passwords do not match'}));
        }
        else{
          setSignupErrors((prev)=>({...prev,confirm_password:''}));
        }
      }
    }
    useEffect(()=>{
      console.log(signupErrors)
      for (const value in signupErrors){
        if(signupErrors[value]!==''){
          setShowErrors((prev)=>({...prev,[value]:true}));
        }
        else{
          setShowErrors((prev)=>({...prev,[value]:false}));
        }
      }
    },[signupErrors])
    useEffect(()=>{
      if(showErrors.name&&showErrors.email&&showErrors.password&&showErrors.confirm_password){
        setIsValid(false);
      }
      else{
        setIsValid(true);
      }
      console.log(isvalid)
    },[signupData])
    const submitHandler = async (event) =>{
        event.preventDefault();
        try{
            let data = {name:signupData.name,email:signupData.email,password:signupData.password}
            const response = await axios.post('http://127.0.0.1:5000/add/customer',{data})
            console.log(response)
            if(response.status===200){
              console.log("Success")
              navigate('/login')
            }
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div>    
          <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
            <div clasName="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
              <div className="text-white">
                <div className="mb-8 flex flex-col items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LvHCi9enZipB3caYb8e3VG4N3DOS4SvLVoiT8KfarA&s" width="150" alt="" srcset="" />
                  <span className="text-gray-300 font-bold">Please enter your details to Signup</span>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="mb-4 text-lg">
                    <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Name"
                    onChange={signupHandler}
                    /><br/>
                    <div className="flex flex-col items-center">
                    {showErrors.name&&<div>{signupErrors.name}</div>}
                    </div>                  
                  </div>

                  <div className="mb-4 text-lg">
                    <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="Email" 
                    onChange={signupHandler}/>
                    <div className="flex flex-col items-center">
                    {showErrors.email&&<div>{signupErrors.email}</div>}
                    </div>  
                  </div>

                  <div className="mb-4 text-lg">
                    <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" onChange={signupHandler}/>
                    <div className="flex flex-col items-center">
                    {showErrors.password&&<div>{signupErrors.password}</div>}
                    </div>  
                  </div>
                  <div className="mb-4 text-lg">
                    <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="confirm_password" placeholder="*********" onChange={signupHandler}/><br/>
                    <div className="flex flex-col items-center">
                    {showErrors.confirm_password&&<div>{signupErrors.confirm_password}</div>}
                    </div>  
                  </div>
                  <div className="mt-8 flex justify-center text-lg text-black">
                    <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                    >Signup</button>
                  </div>
                  <div className="mt-8 flex justify-center text-lg text-black">
                    <div>
                      <div>Already have a Account?<br/><a href="http://localhost:3000/login" >Click here to login</a></div>
                    </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
}