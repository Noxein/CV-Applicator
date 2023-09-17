export default function SkillInputs({array,arrayHandler,changeFun,delFun,addBtn,changeSlider}){     
    return(       
        <div className="skillsInputs">
            {array.map((skill,index) => (
                <div key={skill.id} style={{position:"relative",backgroundColor:"rgba(0,0,0,0.1)", padding:"5px"}}>

                    <div className="wrapper" style={{display:"flex",flexDirection:"column",height:"70px"}}>
                        <input type="text" value={skill.text} onChange={(event)=>{changeFun(array,arrayHandler,event.target.value,index,"text")}} style={{height:"50%"}}/>
                        <input type="range" id={"slider"+index} value={skill.level} min="0" max="10" onChange={(event)=>{changeSlider(array,arrayHandler,event.target.value,index,"level")}} style={{height:"50%"}}/>
                    </div>

                    <button onClick={()=>delFun(array,arrayHandler,index)} style={{position:"absolute",top:"5px",right:"5px"}}>x</button>
                </div>
            ))}
                <button onClick={addBtn}  style={{width:"100%",height:"50px"}}>Add Skill</button>

        </div>
            )}