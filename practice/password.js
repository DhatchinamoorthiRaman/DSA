let a = [[1,2,3],[4,5,6],[7,8,9]];
let p = [1,4,4,3,2,6];
let sum=1;
let m = new Map();
for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
        let arr=[];
        if(i-1>=0){
            arr.push(a[i-1][j]);

        }
        if(j-1>=0){
            arr.push(a[i][j-1]);
        }
        if(i+1<a.length){
            arr.push(a[i+1][j]);
        }
        if(j+1<a.length){
            arr.push(a[i][j+1]);
        }
        m.set(a[i][j],arr);
    }
    
}
for(let val of m.values()){
    console.log(val);
}
for(let j=1;j<p.length;j++){
    if(p[j-1]==p[j]){
        sum+=0;
    }
    else if(  m.get(p[j-1]).includes(p[j])){
        sum+=1;
    }
    else{
        sum+=2;
    }
  
}
console.log(sum);

