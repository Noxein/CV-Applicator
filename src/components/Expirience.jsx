export default function Expirience({array,arrayHandler,editExpirienceWhere,editExpirienceEnd,editExpirienceStart,AddExpirience,deleteExpirience,editResponsiblity,AddResponsibilty,DeleteResponsibilty,editExpirienceJobPostion}){

    return(<>
        {array.map((exp,index)=>(
            <div className="Expirience" key={exp.id}>
                <div className="ExpirienceInputPlace">
                    <input type="text" value={exp.where} placeholder="Place" onChange={(event)=>editExpirienceWhere(array,arrayHandler,event.target.value,index,"where")}/>
                    <input type="text" value={exp.jobPosition} placeholder="Job positon" onChange={(event)=>editExpirienceJobPostion(array,arrayHandler,event.target.value,index,"jobPosition")}/>
                </div>

                <div className="ExpirienceInputDate">
                    <input type="date" value={exp.startdate} placeholder="Start date" onChange={(event)=>editExpirienceStart(array,arrayHandler,event.target.value,index,"startdate")}/>
                    <input type="date" value={exp.enddate} placeholder="End date" onChange={(event)=>editExpirienceEnd(array,arrayHandler,event.target.value,index,"enddate")}/>
                </div>
                
                    <div className="OneResponsibilty">
                        <p>Accomplishments</p>
                        <div className="responsiblityList">
                            {exp.resposibilities.map((res,childIndex)=>(
                                <div key={childIndex}>
                                    <input value={res} type="text" onChange={(event)=>editResponsiblity(event.target.value,childIndex,index)}/>
                                    <button onClick={()=>DeleteResponsibilty(index,childIndex)}>Delete</button>
                                </div>
                            
                            ))}
                        </div>
                        <button onClick={()=>AddResponsibilty(index)} className="addResponsibiltyBtn">Add responsibility</button>
                    </div>
                    <div className="ExpirienceInputButtons">
                        
                                    
                        <button onClick={()=>deleteExpirience(array,arrayHandler,index)}>Delete Expirience</button>
                    </div>
            </div>
        ))}
<button onClick={AddExpirience} className="AddExpirienceBtn">Add Expirience</button>
</>)
}