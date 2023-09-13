import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faHome, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import '../contact.css'

export default function ContactInput({city,phone,email,twitter,linkedin,facebook,handleCity,handlePhone,handleEmail,handleTwitter,handleLinkedin,handleFacebook}){
    return(<>
        <div className="CONTACT">
            <input type="text" placeholder="City" id="city" value={city} onChange={(event)=>handleCity(event.target.value)}/>
            <input type="number" placeholder="Phonenumber" id="phonenumber" value={phone} onChange={(event)=>handlePhone(event.target.value)}/>
            <input type="email" placeholder="E-mail" id="email" value={email} onChange={(event)=>handleEmail(event.target.value)}/>
        </div>

        <div className="SOCIALS">
            <input type="text" placeholder="Linkedin" id="linkedin" value={linkedin} onChange={(event)=>handleLinkedin(event.target.value)}/>
            <input type="text" placeholder="twitter" id="twitter" value={twitter} onChange={(event)=>handleTwitter(event.target.value)}/>
            <input type="text" placeholder="facebook" id="facebook" value={facebook} onChange={(event)=>handleFacebook(event.target.value)}/>
        </div>
    </>)
}

export function ConcatOutput({city,phone,email,twitter,linkedin,facebook}){
    return(<>
        <div className="CONTACT">          
            <p type="text" placeholder="City" id="city"><FontAwesomeIcon icon={faHome} /> {city}</p>
            <p type="number" placeholder="Phonenumber" id="phonenumber"><FontAwesomeIcon icon={faPhone}/> {phone}</p>
            <p type="email" placeholder="E-mail" id="email"><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
        </div>

        <div className="SOCIALS">           
            <p type="text" placeholder="Linkedin" id="linkedin"><FontAwesomeIcon icon={faLinkedin}/> {linkedin}</p>
            <p type="text" placeholder="twitter" id="twitter"><FontAwesomeIcon icon={faTwitter} /> {twitter}</p>
            <p type="text" placeholder="facebook" id="facebook"><FontAwesomeIcon icon={faFacebook} /> {facebook}</p>
        </div>
    </>)
}