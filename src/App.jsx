import { useState } from "react"
import MakeInputLinked from "./makeInput"
import { v4 as uuidv4 } from 'uuid';
import SkillInputs from "./components/SkillInputs";
import ContactInput from "./components/Contact";
import { ConcatOutput } from "./components/Contact";
import About from "./components/About";
import Expirience from "./components/Expirience";
import Education from "./components/Education";



export default function Applicator(){
    const[name,setName] = useState("NAME")
    const[sureName,setsureName] = useState("SURENAME")
    const[title,setTitle] = useState("SPECIALIST IN DATABASE MANAGMENT AND SERVER MANAGMENT")
    const[skills, setTheArray] = useState([{text:"Code", id:uuidv4(),level:5},{text:"Styling", id:uuidv4(),level:10}]);
    const[about,setAbout] = useState([{text:"Booring ah person",id:uuidv4()},{text:"Likes mayonese",id:uuidv4()}])
    const[city,handleCity] = useState("NYC")
    const[phone,handlePhone] = useState("123123123")
    const[email,handleEmail] = useState("your.name@domain.com")
    const[twitter,handleTwitter] = useState("Twitter Link")
    const[linkedin,handleLinkedin] = useState("LinkedIn link")
    const[facebook,handleFacebook] = useState("Facebook link")
    const[expirience,handleExpirience] = useState([{startdate:"2015-09-01",enddate:"2020-07-01",where:"Polargos",resposibilities:['dostarczanie palet w wyznaczone miejsce','kontrola pracownicza'],jobPosition:"Magazynier",id:uuidv4()}])
    const[education,handleEducation] = useState([{startdate:"2015-09-01",enddate:"2020-07-01",direction:"Graphic Porcces Technician",where:"School in name of Heroes of Westerplatte",id:uuidv4()}])
    const[image,setImage] = useState(null)

    function expbtn(event,id){
        let newArr = [...skills]
        newArr[id].text = event
        setTheArray(newArr)
    }

    function AddSkill(){
        setTheArray([...skills,{text:"skillname", id:uuidv4()}])
    }

    function deleteSkill(id){
        let arr = [...skills]
        arr.splice(id,1)
        setTheArray(arr)
    }

    function EditAbout(event,id){
        let newArr = [...about]
        newArr[id].text = event
        setAbout(newArr)
    }

    function AddAbout(){
        setAbout([...about,{text:"Fact About You", id:uuidv4()}])
    }

    function DeleteAbout(id){
        let arr = [...about]
        arr.splice(id,1)
        setAbout(arr)
    }

    function editExpirienceWhere(event,index){
        let newArr = [...expirience]
        newArr[index].where = event
        handleExpirience(newArr)
    }
    function editExpirienceStart(event,index){
        let newArr = [...expirience]
        newArr[index].startdate = event
        handleExpirience(newArr)
    }
    function editExpirienceEnd(event,index){
        let newArr = [...expirience]
        newArr[index].enddate = event
        handleExpirience(newArr)
    }
    function AddExpirience(){
        handleExpirience([...expirience,{startdate:"2023-09-01",enddate:"2023-07-01",where:"Place",resposibilities:['responsiblity1','responsiblity2'],id:uuidv4()}])
    }
    function deleteExpirience(index){
        let arr = [...expirience]
        arr.splice(index,1)
        handleExpirience(arr)
    }
    function editResponsiblity(event,childIndex,index){
        let arr = [...expirience]
        arr[index].resposibilities[childIndex] = event
        handleExpirience(arr)
    }
    function AddResponsibilty(index){
        let arr = [...expirience]
        arr[index].resposibilities = [...arr[index].resposibilities,"new responsiblity"]
        handleExpirience(arr)
    }
    function DeleteResponsibilty(index,childIndex){
        let arr = [...expirience]
        arr[index].resposibilities.splice(childIndex,1)
        handleExpirience(arr)
    }
    function editExpirienceJobPostion(event,index){
        let newArr = [...expirience]
        newArr[index].jobPosition = event
        handleExpirience(newArr)
    }
    function editEducationStart(e, index){
        let arr = [...education]
        arr[index].startdate = e
        handleEducation(arr)
    }
    function editEducationEnd(e,index){
        let arr = [...education]
        arr[index].enddate = e
        handleEducation(arr)
    }
    function editEducationDirection(e,index){
        let arr = [...education]
        arr[index].direction = e
        handleEducation(arr)
    }
    function editEducationWhere(e,index){
        let arr = [...education]
        arr[index].where = e
        handleEducation(arr)
    }
    function DeleteEducation(index){
        let arr = [...education]
        arr.splice(index,1)
        handleEducation(arr)
    }
    function AddEducation(){
        handleEducation([...education,{startdate:"2015-09-01",enddate:"2020-07-01",direction:"IT",where:"School",id:uuidv4()}])
        
    }
    function changeSlider(e,index){
        let newArr = [...skills]
        newArr[index].level = e
        setTheArray(newArr)
    }
    function setWidth(level){
        return String(level*10+"px")
    }

    function setimage(){
        setImage(event.target.files[0])
    }
    return(
        <div className="container">

            <div className="inputs">
                <div className="uploadpic">
                    <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={(e)=>setimage(e)}/>
                </div>
                <div>
                    <MakeInputLinked placeholder="Name" name={name} setName={setName}/> <br />
                    <MakeInputLinked placeholder="Surename" name={sureName} setName={setsureName}/>
                    <MakeInputLinked placeholder="Title" name={title} setName={setTitle}/>
                </div>

                <div>
                    <p>SKILLS</p>
                        <SkillInputs array={skills} changeFun={expbtn} delFun={deleteSkill} addBtn={AddSkill} changeSlider={changeSlider}/>
                </div>

                <div>
                    <p>CONTACT</p>
                        <ContactInput city={city} phone={phone} email={email} twitter={twitter} linkedin={linkedin} facebook={facebook}
                        handleCity={handleCity} handlePhone={handlePhone} handleEmail={handleEmail} handleTwitter={handleTwitter} handleLinkedin={handleLinkedin} handleFacebook={handleFacebook}/>
                </div>

                <div>
                    <p>ABOUT</p>
                        <About arr={about} changeAbout={EditAbout} delAbout={DeleteAbout} addAbout={AddAbout}/>
                </div>

                <div>
                    <p>EXPIRIENCE</p>
                        <Expirience array={expirience} editExpirienceWhere={editExpirienceWhere} editExpirienceStart={editExpirienceStart} editExpirienceEnd={editExpirienceEnd}
                        AddExpirience={AddExpirience} deleteExpirience={deleteExpirience} editResponsiblity={editResponsiblity} AddResponsibilty={AddResponsibilty}
                        DeleteResponsibilty={DeleteResponsibilty} editExpirienceJobPostion={editExpirienceJobPostion}/>
                </div>

                <div>
                    <p>EDUCATION</p>
                        <Education array={education} editEducationStart={editEducationStart} editEducationEnd={editEducationEnd} editEducationWhere={editEducationWhere}
                         editEducationDirection={editEducationDirection} DeleteEducation={DeleteEducation} AddEducation={AddEducation}/>
                </div>

                
            </div>

            <div className="outputs">
                <div className="personal-info">
                    <div className="imgborder">
                        {image && (<img src={URL.createObjectURL(image)} alt="not found" />)}
                    </div>

                    <div className="skills">
                        <p className="orange">SKILLS</p>
                        <div className="orangedash"></div>
                        <div className="skillsAll">
                            {skills.map((skill) => (
                            
                                <div key={skill.id}>
                                    <div className="skillWrapper">
                                        <p>{skill.text}</p>
                            
                                        <div style={{backgroundColor:'whitesmoke',width:"100px",height:"1rem"}}>
                                            <div style={{backgroundColor:'orange',width:setWidth(skill.level),height:"1rem"}}></div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                        </div>
                    </div>

                    <div className="contact">
                        <p className="orange">CONTACT</p>
                        <div className="orangedash"></div>
                        <div className="contactItems">
                            <ConcatOutput city={city} phone={phone} email={email} twitter={twitter} linkedin={linkedin} facebook={facebook}/>
                        </div>
                    </div>

                </div>

                <div className="other-info">
                    <div>
                        <p className="fullname">{name} {sureName}</p>
                        <p className="title">{title}</p>
                    </div>

                    <div className="aboutme">
                        <p className="orange">PROFILE</p>
                        <div className="orangedash"></div>
                        {about.map((fact)=>(
                            <p key={fact.id}>{fact.text}</p>
                        ))}
                    </div>

                    <div className="expirience">
                        <p className="orange">EXPIRIENCE</p>
                        <div className="orangedash"></div>
                        {expirience.map((exp)=>(
                            <div key={exp.id} className="oneExpirience">
                                
                                <div className="expiriencewrapper">
                                    <div className="Job">
                                        <p className="jobname">{exp.where}</p>
                                        <p className="jobpositon">{exp.jobPosition}</p>
                                    </div>
                                    <div className="date"><p>{exp.startdate} - {exp.enddate}</p></div>
                                </div>                    
                                
                                <div className="responsibilites">
                                    <p className="responsibities">Responsibilites</p>
                                    <ul>{exp.resposibilities.map((responsibilty,index)=>(
                                        <li key={index} className="responsibility">{responsibilty}</li>
                                    ))}</ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="education">
                        <p className="orange">EDUCATION</p>
                        <div className="orangedash"></div>
                        <div>
                            {education.map((edu)=>(
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        
    
}