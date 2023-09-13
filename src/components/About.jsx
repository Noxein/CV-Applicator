export default function About({arr,changeAbout,delAbout,addAbout}){
    return(
        <div className="aboutInputs">
            {arr.map((skill,index) => (
                <div key={skill.id}>
                    <input type="text" value={skill.text} onChange={(event)=>{changeAbout(event.target.value , index)}}/>
                    <button onClick={()=>delAbout(index)}>Delete</button>
                </div>
            ))}
        <button onClick={addAbout} >Add About</button>

    </div>
    )
}