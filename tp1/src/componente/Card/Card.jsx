const Card=(props)=>{
    return(
        <>
            <div>
                <p>{props.nombre}</p>
                <p>{props.apellido}</p>
                <p>{props.nacionalidad}</p>
                <p>{props.dni}</p>
                <p>{props.edad}</p>
            </div>
        </>
    )
}

export default Card;