export default function About({array,arrayHandler,changeAbout,delAbout,addAbout}){
    return(
        <div className="aboutInputs">
            {array.map((skill,index) => (
                <div key={skill.id}>
                    <textarea type="text" cols="35" rows="4" value={skill.text} onChange={(event)=>{changeAbout(array,arrayHandler,event.target.value,index,"text")}}/>
                    <button onClick={()=>delAbout(array,arrayHandler,index)}>Delete</button>
                </div>
            ))}
        <button onClick={addAbout} >Add About</button>

    </div>
    )
}