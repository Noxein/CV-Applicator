export default function Education({array,arrayHandler,editEducationStart,editEducationEnd,editEducationWhere,editEducationDirection,DeleteEducation,AddEducation}){
    return(
        <div>
        {array.map((edu,index)=>(
            <div key={edu.id}>
                <div >
                    <div>
                        From <input type="date" value={edu.startdate} onChange={(event)=>{editEducationStart(array,arrayHandler,event.target.value,index,"startdate")}}/>
                        To <input type="date" value={edu.enddate} onChange={(event)=>{editEducationEnd(array,arrayHandler,event.target.value,index,"enddate")}}/>
                    </div>
                    <div>
                        At <input type="text" value={edu.where} onChange={(event)=>{editEducationWhere(array,arrayHandler,event.target.value,index,"where")}}/>
                        Direction <input type="text" value={edu.direction} onChange={(event)=>{editEducationDirection(array,arrayHandler,event.target.value,index,"direction")}}/>
                    </div>
                    <button onClick={()=>DeleteEducation(array,arrayHandler,index)}>Delete Education</button>
                </div>
                
            </div>
        ))}
        <button onClick={AddEducation}>Add Education</button>
        </div>
    )
}