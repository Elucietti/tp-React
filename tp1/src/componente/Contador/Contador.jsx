import React,{useState, useEffect} from "react";

const Contador = () =>{
    const[count, setCount]=useState(0);
    const[message,setMessage]=useState("");

    useEffect(()=>{
        if(count===0){
            setMessage("Haga click para comenzar!");
        }else{
            setMessage("gracias!");
        }
    
           });
    return(
        <div>
            <h1>{message}</h1>
            <h2>contador: {count}</h2>
            <button onClick={()=>setCount(count+1)}>incrementar</button>
            <button onClick={()=>setCount(count-1)}>Decrementar</button>
        </div>
    )
}

export default Contador;