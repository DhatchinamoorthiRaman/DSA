let arr = [1,2,2];
// let res = [];
let sub = [];
let index=0;
let m = new Set();

subArray(arr,m,sub,index);
function subArray(arr,m,sub,index){
    
    let d = [...sub];
  
    // console.log(m.has(...d));
    if(!m.has(d)){
        m.add(d);
    }
    

    
    // res.push(d);
    for(let i = index;i<arr.length;i++){
        sub.push(arr[i]);
        subArray(arr,m,sub,i+1);
        sub.pop();
    }
}
// console.log(res);
console.log(m.values());

// let arr=[1,2,3];
// let arr2 = [1,2,3];
// let s = new Set();
// s.add(1);
// s.add(2);
// s.add(3);s.add(3);
// s.add(arr);
// if(!s.has(arr)){
//     s.add(arr2);
// }

// console.log(s.values());