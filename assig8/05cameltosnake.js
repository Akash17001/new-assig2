function tosnkcase(input){
    let res=``
    for(i=0;i<input.length;i++){
        curr=input[i]
        if(curr==curr.toUpperCase()){
            res=res+"_"+curr.toLowerCase()
        }
        else{
            res=res+curr
        }
    }
    console.log(res)

}
tosnkcase(`itIsSnakeCase`)