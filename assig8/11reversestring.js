function revstr(str){
    let res=''
    for(i=str.length-1;i>=0;i--)
{
    res=res+str[i]
}
    return res
}
let strn="hero"
console.log(revstr(strn))