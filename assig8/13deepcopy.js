const originalObject = { a: 1, b:5,c:{e:6},g:{h:8}};  
const deepCopy = JSON.parse(JSON.stringify(originalObject)); 
// deepCopy.a = 3;  
deepCopy.g.h = 4;    
console.log("oobj",originalObject)
console.log("deepcopy",deepCopy)