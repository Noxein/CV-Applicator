import { useState } from "react"
import MakeInputLinked from "./makeInput"
import { v4 as uuidv4 } from 'uuid';
import SkillInputs from "./components/SkillInputs";
import ContactInput from "./components/Contact";
import { ConcatOutput } from "./components/Contact";
import About from "./components/About";
import Expirience from "./components/Expirience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Functions from "./components/Functions";
import { SkillOuptuts,LanguageOuptuts,AboutmeOutput,EducationOutput,ExpirienceOutput } from "./outputs/language";
import OrangeDash from "./components/dashAndText";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

export default function Applicator(){
    const[name,setName] = useState("NAME")
    const[sureName,setsureName] = useState("SURENAME")
    const[title,setTitle] = useState("SPECIALIST IN DATABASE MANAGMENT AND SERVER MANAGMENT")
    const[skills, setTheArray] = useState([{text:"Code", id:uuidv4(),level:5},{text:"Styling", id:uuidv4(),level:10}]);
    const[about,setAbout] = useState([{text:"Booring ah person",id:uuidv4()},{text:"Likes mayonese",id:uuidv4()}])
    const[city,handleCity] = useState("City")
    const[phone,handlePhone] = useState("Phone number")
    const[email,handleEmail] = useState("E-mail")
    const[expirience,handleExpirience] = useState([{startdate:"2015-09-01",enddate:"2020-07-01",where:"Polargos",resposibilities:['dostarczanie palet w wyznaczone miejsce','kontrola pracownicza'],jobPosition:"Magazynier",id:uuidv4()}])
    const[education,handleEducation] = useState([{startdate:"2015-09-01",enddate:"2020-07-01",direction:"Graphic Porcces Technician",where:"School in name of Heroes of Westerplatte",id:uuidv4()}])
    const[image,setImage] = useState(null)
    const[Language,setLanguage] = useState([{language:"English",level:"C1",id:uuidv4()},{language:"Russian",level:"A2",id:uuidv4()}])

const ImageFunctions = {
    setWidth: function(level){
        return String(level*10+"px")
    },
    setimage: function(){
        setImage(event.target.files[0])
    }
}
const ResponsibilityFunctions = {
    AddResponsibilty: function(index){
        let arr = [...expirience]
        arr[index].resposibilities = [...arr[index].resposibilities,"new responsiblity"]
        handleExpirience(arr)
    },
    DeleteResponsibilty: function(index,childIndex){
        let arr = [...expirience]
        arr[index].resposibilities.splice(childIndex,1)
        handleExpirience(arr)
    },
    editResponsiblity: function(event,childIndex,index){
        let arr = [...expirience]
        arr[index].resposibilities[childIndex] = event
        handleExpirience(arr)
    },
}
function downloadPdfDocument(rootElementId){
    const input = document.getElementById(rootElementId);
    html2canvas(input)
      .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'pt', 'a3');
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save("download.pdf");
      }).catch(err => console.log(err))
  }

    return(
        <div className="container">

            <div className="inputs">
                <div className="uploadpic">
                    <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={(e)=>ImageFunctions.setimage(e)}/>
                    <button onClick={()=>downloadPdfDocument('outputs')}>Download as PDF</button>
                </div>
                <div>
                    <MakeInputLinked placeholder="Name" name={name} setName={setName}/> <br />
                    <MakeInputLinked placeholder="Surename" name={sureName} setName={setsureName}/>
                    <MakeInputLinked placeholder="Title" name={title} setName={setTitle}/>
                </div>

                <div>
                    <p>SKILLS</p>
                        <SkillInputs 
                        array={skills}
                        arrayHandler={setTheArray}
                        addBtn={()=>Functions.AddSkill(setTheArray,skills,{text:"Skill",level:5,id:uuidv4()})}
                        delFun={Functions.deleteSkill}
                        changeFun={Functions.editSkill}
                        changeSlider={Functions.editSkill}
                        />

                </div>

                <div>
                    <p>LANGUAGES</p>

                        <Languages 
                        array={Language}
                        arrayHandler={setLanguage}
                        handleAddLanguage={()=>Functions.AddSkill(setLanguage,Language,{language:"Language",level:"A1",id:uuidv4()})}
                        handleDeleteLanguage={Functions.deleteSkill}
                        handleLanguage={Functions.editSkill} 
                        handleLanguageLevel={Functions.editSkill}
                        />
                </div>

                <div>
                    <p>CONTACT</p>
                        <ContactInput city={city} phone={phone} email={email}

                        handleCity={handleCity} handlePhone={handlePhone} handleEmail={handleEmail}/>
                </div>

                <div>
                    <p>ABOUT</p>
                        <About
                        array={about}
                        arrayHandler={setAbout}
                        addAbout={()=>Functions.AddSkill(setAbout,about,{text:"About You",id:uuidv4()})}
                        delAbout={Functions.deleteSkill}
                        changeAbout={Functions.editSkill}
                        />
                </div>

                <div className="expirienceoneOutput">
                    <p>EXPIRIENCE</p>
                        <Expirience 
                        array={expirience}
                        arrayHandler={handleExpirience}
                        AddExpirience={()=>Functions.AddSkill(handleExpirience,expirience,{startdate:"2023-09-01",enddate:"2023-07-01",where:"Place",resposibilities:['responsiblity1','responsiblity2'],id:uuidv4()})} 
                        AddResponsibilty={ResponsibilityFunctions.AddResponsibilty}
                        deleteExpirience={Functions.deleteSkill}
                        DeleteResponsibilty={ResponsibilityFunctions.DeleteResponsibilty}
                        editExpirienceWhere={Functions.editSkill} 
                        editExpirienceStart={Functions.editSkill} 
                        editExpirienceEnd={Functions.editSkill}
                        editResponsiblity={ResponsibilityFunctions.editResponsiblity} 
                        editExpirienceJobPostion={Functions.editSkill}/>
                </div>

                <div>
                    <p>EDUCATION</p>
                        <Education
                        array={education}
                        arrayHandler={handleEducation}
                        AddEducation={()=>Functions.AddSkill(handleEducation,education,{startdate:"2015-09-01",enddate:"2020-07-01",direction:"IT",where:"School",id:uuidv4()})}
                        DeleteEducation={Functions.deleteSkill}    
                        editEducationStart={Functions.editSkill}
                        editEducationEnd={Functions.editSkill} 
                        editEducationWhere={Functions.editSkill}
                        editEducationDirection={Functions.editSkill} 
                        />
                </div>

                
            </div>

            <div className="outputs" id="outputs">
                <div className="personal-info">
                    <div className="personal-info-wrapper">
                        <div className="imgborder"
                        style={{  width: "calc(var(--variable-width)*0.15)",
                            height: "calc(var(--variable-width)*0.15)",
                            border: "solid orange 3px",
                            overflow: "hidden",
                            zIndex: "2",
                            margin: "0 auto",
                            marginTop: "30px"}}
                        >
                            {image && (<img src={URL.createObjectURL(image)} alt="not found"
                            style={{width: "calc(var(--variable-width)*0.21)",
                                position: "relative",
                                top: "-21%",
                                left: "-21%"}}
                            />)}
                        </div>
                        <div className="skills">
                            <OrangeDash name={"SKILLS"}/>
                            <div className="skillsAll">
                                <SkillOuptuts array={skills} widthfun={ImageFunctions.setWidth}/>
                            </div>
                        </div>
                        <div className="languages" id="languages">
                            <p className="orange">LANGUAGES</p>
                            <div className="orangedash"></div>
                            <div className="languagesAll">
                                <LanguageOuptuts array={Language}/>
                            </div>
                        </div>
                    </div>

                    <div className="contact">

                        <OrangeDash name={"CONTACT"}/>

                        <div className="contactItems">
                            <ConcatOutput city={city} phone={phone} email={email}/>
                        </div>
                    </div>


                </div>

                <div className="other-info">
                    <div>
                        <p className="fullname">{name} {sureName}</p>
                        <p className="title">{title}</p>
                    </div>

                    <div className="aboutme">
                        <OrangeDash name={"PROFILE"}/>
                        <AboutmeOutput array={about}/>
                    </div>

                    <div className="expirience">
                        <OrangeDash name={"EXPIRIENCE"}/>
                        <ExpirienceOutput array={expirience}/>
                    </div>

                    <div className="education">
                        <OrangeDash name={"EDUCATION"}/>
                        
                        <EducationOutput array={education}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
        
    
}