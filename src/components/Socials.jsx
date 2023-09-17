import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Socials({array,arrayHandler,handleSocialIcon,handleDeleteSocial,handleAddSocial}){
    return(
        <div>
            {array.map((social,index)=>(
                <div key={social.id}>
                    <input type="text" value={social.name} onChange={(e)=>arrayHandler(array,arrayHandler,e.target.value,index,"name")}/>
                    <select onChange={(e)=>handleSocialIcon(array,arrayHandler,e.target.value,index,"level")}>
                        <option value="A1"><FontAwesomeIcon icon={faTwitter} /></option>
                        <option value="A2"><FontAwesomeIcon icon={faTwitter} /></option>

                        <option value="B1"><FontAwesomeIcon icon={faTwitter} /></option>
                        <option value="B2"><FontAwesomeIcon icon={faTwitter} /></option>

                        <option value="C1"><FontAwesomeIcon icon={faTwitter} /></option>
                        <option value="C2"><FontAwesomeIcon icon={faTwitter} /></option>
                    </select>
                    <button onClick={()=>handleDeleteSocial(array,arrayHandler,index)}>Delete</button>
                </div>
            ))}
            <button onClick={handleAddSocial}>Add Socials</button>
        </div>
    )
}