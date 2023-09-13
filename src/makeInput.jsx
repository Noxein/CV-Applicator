export default function MakeInputLinked({name,setName,placeholder}){

    return(
        <>
            <input type="text" placeholder={placeholder} id={name} value={name} onChange={(event)=>setName(event.target.value)}/>
        </>
    )
  }