export default function Switch(){
    return(
        <label className="switch">
        <input type="checkbox" checked onChange={console.log("yes")}/>
            <span className="slider round"></span>
        </label>
    )
}