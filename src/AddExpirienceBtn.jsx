import { useState } from "react"


export default function AddExpirienceBtn(id){

        const [skill,setSkill] = useState("")
        
        return(
            [
                <p key={"skillInput"+id} >{skill}</p>,
                <input type="text" key={"skillOutput"+id} value={skill} onChange={(event)=>{setSkill(event.target.value)}}/>
            ]
        )

    }
  