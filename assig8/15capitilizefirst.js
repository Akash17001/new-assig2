let a=["abc","def","ghi"]
let y=a.map(el=>(el.charAt(0).toLocaleUpperCase()+el.slice(1).toLowerCase()))
console.log(y)