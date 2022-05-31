import React from "react";
import {db} from '../firebase'
import { collection ,connectFirestoreEmulator,getDoc,getDocs, updateDoc,query,orderBy} from "firebase/firestore";
import {useState,useEffect} from "react";
import { doc, deleteDoc  ,onSnapshot} from "firebase/firestore";
import { async } from "@firebase/util";
export default function (){
  const colRef=collection(db,"todos")

  const [toDoL,setToDo] =useState([]);
 const q=query(colRef,orderBy('time'))

 
  /*

   getDocs(colRef).then((snapshot)=>{
     snapshot.docs.forEach((doc)=>{
      setToDo(old=>[...old,{...doc.data(),id:doc.id}])
     
     })
   }).catch((err)=>{
     console.log(err.message)
   })
  },[])
  */
  useEffect(()=>{
onSnapshot(q,(snapshot)=>{
  setToDo([]);
  snapshot.docs.forEach((doc)=>{
    setToDo(old=>[...old,{...doc.data(),id:doc.id}])
   })
})},[])

 const handleDelete = (id) => {
   deleteDoc(doc(db,"todos",id)).then()
  }
  const handleCheck=(id,checked)=>{
  
    updateDoc(doc(db,"todos",id),{
    
      completed:!checked

    })
  }
    return (
        <div className="todo">
         <div>
           {
             toDoL.map((doc)=>{
               return(
                 <div className="item" key={doc.id}>
                   {doc.title}
                   <button onClick={()=>handleDelete(doc.id)}>
                     delete
                   </button>
                      
                   <button  onClick={()=>handleCheck(doc.id,doc.completed)} className={["btnCheck",doc.completed?"not":"completed"].join(" ")}>
                       check
                   </button>
                   
                   </div>
               )
             })
           }

         </div>


        </div>
    )
}

