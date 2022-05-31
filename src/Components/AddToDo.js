import React from "react";
import {db} from '../firebase'
import { collection ,addDoc,serverTimestamp} from "firebase/firestore";
import { useState } from "react";
export default function AddToDo(){
const [title,setTitle]=useState("")

const handleSubmit=async(e) => {
e.preventDefault();
if(title !=""){
    await addDoc(collection(db,"todos"),{
       title,completed:false,time:serverTimestamp()
      });
   
     setTitle("");

}
}

return(
    <form className="formE" onSubmit={handleSubmit}>
      <textarea type="text" placeholder="...أدخل النص" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="inputArea"></textarea>
      <div className="btn_container">
          <button>اضافة النص</button>
      </div>
    </form>
)
}
