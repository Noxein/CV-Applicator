export default function Education({array,editEducationStart,editEducationEnd,editEducationWhere,editEducationDirection,DeleteEducation,AddEducation}){
    return(
        <div>
        {array.map((edu,index)=>(
            <div key={edu.id}>
                <div >
                    <div>
                        From <input type="date" value={edu.startdate} onChange={(event)=>{editEducationStart(event.target.value,index)}}/>
                        To <input type="date" value={edu.enddate} onChange={(event)=>{editEducationEnd(event.target.value,index)}}/>
                    </div>
                    <div>
                        At <input type="text" value={edu.where} onChange={(event)=>{editEducationWhere(event.target.value,index)}}/>
                        Direction <input type="text" value={edu.direction} onChange={(event)=>{editEducationDirection(event.target.value,index)}}/>
                    </div>
                    <button onClick={()=>DeleteEducation(index)}>Delete Education</button>
                </div>
                
            </div>
        ))}
        <button onClick={AddEducation}>Add Education</button>
        </div>
    )
}