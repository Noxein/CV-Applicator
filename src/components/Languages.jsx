export default function Languages({array,arrayHandler,handleLanguage,handleLanguageLevel,handleAddLanguage,handleDeleteLanguage}){
    return(
        <div>
            {array.map((lang,index)=>(
                <div key={lang.id}>
                    <input type="text" value={lang.language} onChange={(e)=>handleLanguage(array,arrayHandler,e.target.value,index,"language")}/>
                    <select onChange={(e)=>handleLanguageLevel(array,arrayHandler,e.target.value,index,"level")}>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>

                        <option value="B1">B1</option>
                        <option value="B2">B2</option>

                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                    </select>
                    <button onClick={()=>handleDeleteLanguage(array,arrayHandler,index)}>Delete</button>
                </div>
            ))}
            <button onClick={handleAddLanguage}>Add Language</button>
        </div>
    )
}