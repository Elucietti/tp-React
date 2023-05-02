import { useState } from "react";
import Card from "../Card/Card";

const Formulario=()=>{
const[nombre, setNombre]=useState("");
const[apellido, setApellido]=useState("");
const[nacionalidad,setNacionalidad]=useState("");
const[dni, setDni]=useState(0);
const[edad, setEdad]=useState(0);

const[personas, setPersonas]=useState([]);


const HandleSubmit=(e)=>{
    e.preventDefault();
    console.log(nombre);
    console.log(apellido);

    setPersonas([{nombre,apellido,nacionalidad,dni,edad},...personas]);
    setNombre('');
    setApellido('');
    setNacionalidad('');
    setDni(); 
    setEdad();
}
    return( 
       <div>
        <form onSubmit={HandleSubmit}>
            <label>Nombre :   
                <input type="text" value={nombre} onChange={(e)=>(setNombre(e.target.value))}></input>
            </label>

            <label>Apellido :
                <input type="text" value={apellido} onChange={(e)=>(setApellido(e.target.value))}></input>
            </label>

            <label>Nacionalidad :
                <input type="text" value={nacionalidad} onChange={(e)=>(setNacionalidad(e.target.value))}></input>
            </label>

            <label>Dni :
                <input type="number" value={dni} onChange={(e)=>(setDni(e.target.value))}></input>
            </label>

            <label>Edad :
                <input type="number" value={edad} onChange={(e)=>(setEdad(e.target.value))}></input>
            </label>

            <button type="submit">Enviar</button>
        </form>
        <div>
            {personas.map((personas) => <Card nombre={personas.nombre}
                                              apellido={personas.apellido}
                                              nacionalidad={personas.nacionalidad}  
                                              dni={personas.dni}   
                                              edad={personas.edad} 
                                             />)}
        </div>
       </div> 
    )

   
}
export default Formulario;


