// let arr = [1, 2, 3, 3, 2, 2, 1, 7, 7, 8, 9];

// function num() {
//   let number = {};
//   for (let i = 0; i < arr.length; i++) {
//     let x = arr[i]
//     if (number[x]) {
//       number[x]++
//     } else {
//       number[x] = 1
//     }
//   }
//   for (let a in number) {
////console.log(`${a}occurs ${number[a]}times`)
//     console.log(`{"${a}":${number[a]}}`)
//   }
// }

// num()


//{"1":2}

function countrep(){
  let x={}
  for(let num of arr){
   if(x[num]){
    x[num] += 1
   }
   else{
    x[num]=1
   }
   }
   return x   
  }
let arr=[1,2,3,4,5,5,4,3,2,1,1]
console.log(countrep(arr))