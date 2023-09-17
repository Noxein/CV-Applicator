const Functions ={
    AddSkill: function(arrayHandler,array,item){            
        arrayHandler([...array,item])
    },
    deleteSkill: function(array,arrayHandler,index){
        let arr = [...array]
        arr.splice(index,1)
        arrayHandler(arr)
    },
    editSkill: function(array,arrayHandler,event,id,target){
        let newArr = [...array]
        newArr[id][target] = event
        arrayHandler(newArr)
    },
}
export default Functions