//remove duplicate  string
let x="hiihellobye"
function remdup(){
    let res =``
    for(let i=0;i<x.length;i++){
        let char=x[i]
        if(res .indexOf(char)===-1){
            res +=char

        }
    }
    return res 
}
let res =remdup(x)
console.log(res)