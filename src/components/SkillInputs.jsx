export default function SkillInputs({array,changeFun,delFun,addBtn,changeSlider}){     
    return(       
        <div className="skillsInputs">
            {array.map((skill,index) => (
                <div key={skill.id}>
                    <input type="text" value={skill.text} onChange={(event)=>{changeFun(event.target.value , index)}}/>
                    <input type="range" id={"slider"+index} value={skill.level} min="0" max="10" onChange={(event)=>{changeSlider(event.target.value , index)}}/>
                    <button onClick={()=>delFun(index)}>Delete</button>
                </div>
            ))}
                <button onClick={addBtn} >Add Skill</button>

        </div>
            )}