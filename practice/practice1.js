// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.iterator]() {
//       this.current = this.from;
//       return this;
//     },
  
//     next() {
//       if (this.current <= this.to) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
  
  
// // let arr = [1,2,3,4]
// for(let num of range){
//     console.log(num);
// }
let x=123;
console.log(reverse(x));
function reverse(x) {
  let res=0;
  let c=Math.abs(x);
  while(c!=0){
    console.log(c);
      let rem=c%10;
      res=(res*10)+rem;
      c=Math.floor(c/10);
  }
  // if(x<0){
  //     return res*-1;
  // }
  return res;
  
  
};