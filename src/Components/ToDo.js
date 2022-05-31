import React from "react";
import {db} from '../firebase'
import { collection ,connectFirestoreEmulator,getDocs} from "firebase/firestore";
import {useState,useEffect} from "react";
import { doc, deleteDoc  ,onSnapshot} from "firebase/firestore";
export default function (){
  const colRef=collection(db,"todos")

  const [toDoL,setToDo] =useState([]);
  const [t,setT]=useState(0);
  /*
  useEffect(()=>{
   getDocs(colRef).then((snapshot)=>{
     snapshot.docs.forEach((doc)=>{
      setToDo(old=>[...old,{...doc.data(),id:doc.id}])
     
     })
   }).catch((err)=>{
     console.log(err.message)
   })
  },[])
  */
onSnapshot(colRef,(snapshot)=>{
  setToDo([]);
  snapshot.docs.forEach((doc)=>{
    setToDo(old=>[...old,{...doc.data(),id:doc.id}])
   
   })
})

 const handleDelete = (id) => {
   deleteDoc(doc(db,"todos",id)).then(
     setT(old=>old+1)
   )
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
                   </div>
               )
             })
           }

         </div>


        </div>
    )
}

