

function onlyOwnKeys(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(Object.entries(obj))
        }
    }   
}