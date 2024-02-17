let arr=[];
let str = "my name is rdm";
let n=3;
// let str="codingmart technologies";
// let n=4;
let l = str.length;
for(let i=0;i<n;i++){
    arr[i]=new Array(str.length);
    arr[i].fill("*");
}

var g=0;
var x=0;
var y=0;

while(g!=str.length){
    if(x<n){
        arr[x][x+y]=str.charAt(g);          
        x++;
        g++;
    }
    else{
        x=0;
        y++;        
    }  
}
var result="";
for(let i=0;i<arr.length;i++){
    // var res2="";
    let k=i;
    for(let j=i;j<arr[i].length;j++){
        if(arr[i][j+1]!="*"){
            result+=arr[i][j];
        }
        else{
            result+=arr[i][j];
            break;
        }
    }
    // res2=res2.trimEnd();
    // result+=res2
    while(k>=0 && i!=arr.length-1){
        result+="*";
        k--;
    }
}
result=result.trim();
result = result.replace(/\s/g,"*");
console.log(result);
console.log(arr);