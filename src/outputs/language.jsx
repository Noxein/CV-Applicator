function LanguageOuptuts({array}){
    return(
        <>
            {array.map((language) => (
            
            <div key={language.id} className="languagePair">
                <p>{language.language}</p>
                <p>{language.level}</p>
            </div>
            ))}
        </>
    )
}
function SkillOuptuts({array,widthfun}){
    return(
        <>
            {array.map((skill) => (
                                
                <div key={skill.id}>
                    
                    <div className="skillWrapper">
                        <p>{skill.text}</p>
            
                        <div style={{backgroundColor:'#4e5156',width:"100px",height:"1rem",display:"flex",alignItems:"center",borderRadius:"5px",overflow:"hidden"}}>
                            <div style={{backgroundColor:'orange',width:widthfun(skill.level),height:"0.625rem",margin:"0px 3px",borderRadius:"3px"}}></div>
                        </div>
                    </div>
                </div>
                ))}
        </>
    )
}
function AboutmeOutput({array}){
    return(
        <>
        {array.map((fact)=>(
            <p key={fact.id}>{fact.text}</p>
        ))}
        </>
    )
}
function ExpirienceOutput({array}){
    return(
        <>
        {array.map((exp)=>(
            <div key={exp.id} className="oneExpirience">
                
                <div className="expiriencewrapper">
                    <div className="Job">
                        <p className="jobname">{exp.where}</p>
                        <p className="jobpositon">{exp.jobPosition}</p>
                    </div>
                    <div className="date"><p>{exp.startdate} - {exp.enddate}</p></div>
                </div>                    
                
                <div className="responsibilites">
                    <p className="responsibities">Accomplishments</p>
                    <ul>{exp.resposibilities.map((responsibilty,index)=>(
                        <li key={index} className="responsibility">{responsibilty}</li>
                    ))}</ul>
                </div>
            </div>
        ))}
        </>
    )
}

function EducationOutput({array}){
    return(<>
        {array.map((edu)=>(
            <div key={edu.id} className="oneEducation">
                <div className="eduWrapper">
                    <div className="eduDireciton">
                        {edu.direction}
                    </div>
                    <div className="eduPlace">
                        {edu.where}
                    </div>
                </div>
                <div>
                {edu.startdate} - {edu.enddate}
                </div>
            </div>
        ))}
    </>)
}

export {SkillOuptuts,LanguageOuptuts,AboutmeOutput,ExpirienceOutput,EducationOutput}