import React from "react";
import {db} from '../firebase'
import { collection ,addDoc} from "firebase/firestore";
import { useState } from "react";
export default function AddToDo(){
const [title,setTitle]=useState("")

const handleSubmit=async(e) => {
e.preventDefault();
if(title !=""){
    await addDoc(collection(db,"todos"),{
       title,completed:false
      });
      console.log(collection(db,"todos"))
     setTitle("");
}
}

return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter To Do..." value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
      <div className="btn_container">
          <button>add</button>
      </div>
    </form>
)
}
