import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export function LoginPage(props){
    const navigate = useNavigate('/');
    const[error,setError] = useState('');
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [customers,setCustomers]=useState([])
    function emailHandler(event){
        setEmail(event.target.value)
    }
    function passwordHandler(event){
        setPassword(event.target.value);
    }
    function loginHandler(event){
        event.preventDefault();
        axios.get('http://127.0.0.1:5000/get/customers').then(
          response=>{setCustomers(response)
          })
        let a = []
        a = customers
        console.log(a)
        console.log(customers["data"])
        console.log([{"_id": {"$oid": "64ef116a237cddcfd426f2b5"}, "data": {"name": "Rahul", "email": "rahulsrivastav400@gmail.com", "password": "firstdev"}}])
    }
    return(
        <div>    
          <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
            <div clasName="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
              <div className="text-white">
                <div className="mb-8 flex flex-col items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LvHCi9enZipB3caYb8e3VG4N3DOS4SvLVoiT8KfarA&s" width="150" alt="" srcset="" />
                </div>
                <form onSubmit={loginHandler}>

                  <div className="mb-4 text-lg">
                    <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="Email" 
                    onChange={emailHandler}/>
                    <div className="flex flex-col items-center">
                    </div>  
                  </div>

                  <div className="mb-4 text-lg">
                    <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" onChange={passwordHandler}/>
                    <div className="flex flex-col items-center">
                    </div>  
                  </div>
                  <div className="mt-8 flex justify-center text-lg text-black">
                    <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                    >Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}