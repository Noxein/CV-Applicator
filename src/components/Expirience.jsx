export default function Expirience({array,editExpirienceWhere,editExpirienceEnd,editExpirienceStart,AddExpirience,deleteExpirience,editResponsiblity,AddResponsibilty,DeleteResponsibilty,editExpirienceJobPostion}){

    return(<>
        {array.map((exp,index)=>(
            <div className="Expirience" key={exp.id}>
                From <input type="date" value={exp.startdate} placeholder="Start date" onChange={(event)=>editExpirienceStart(event.target.value,index)}/>
                To <input type="date" value={exp.enddate} placeholder="End date" onChange={(event)=>editExpirienceEnd(event.target.value,index)}/>
                At <input type="text" value={exp.where} placeholder="Place" onChange={(event)=>editExpirienceWhere(event.target.value,index)}/> <br/>
                As <input type="text" value={exp.jobPosition} placeholder="Job positon" onChange={(event)=>editExpirienceJobPostion(event.target.value,index)}/>
                <ul>

                <div>
                    <p>Responsibilites</p>
                    {exp.resposibilities.map((res,childIndex)=>(
                        <div key={childIndex}>
                            <input value={res} type="text" onChange={(event)=>editResponsiblity(event.target.value,childIndex,index)}/>
                            <button onClick={()=>DeleteResponsibilty(index,childIndex)}>Delete</button>
                        </div>
                        
                    ))}
                </div>
                <button onClick={()=>AddResponsibilty(index)}>Add responsibility</button>
                </ul>
            
            <button onClick={()=>deleteExpirience(index)}>Delete Expirience</button>
            </div>
        ))}
<button onClick={AddExpirience}>Add Expirience</button>
</>)
}