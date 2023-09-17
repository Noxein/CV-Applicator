import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faHome, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import '../contact.css'

export default function ContactInput({city,phone,email,handleCity,handlePhone,handleEmail}){
    return(<>
        <div className="contactMain">
            <div className="CONTACT">
                <input type="text" placeholder="City" id="city" value={city} onChange={(event)=>handleCity(event.target.value)}/>
                <input type="text" placeholder="Phonenumber" id="phonenumber" value={phone} onChange={(event)=>handlePhone(event.target.value)}/>
                <input type="email" placeholder="E-mail" id="email" value={email} onChange={(event)=>handleEmail(event.target.value)}/>
            </div>
        </div>
    </>)
}

export function ConcatOutput({city,phone,email}){
    return(<>
        <div className="CONTACT">          
            <p type="text" placeholder="City" id="city"><FontAwesomeIcon icon={faHome} /> {city}</p>
            <p type="number" placeholder="Phonenumber" id="phonenumber"><FontAwesomeIcon icon={faPhone}/> {phone}</p>
            <p type="email" placeholder="E-mail" id="email"><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
        </div>

    </>)
}