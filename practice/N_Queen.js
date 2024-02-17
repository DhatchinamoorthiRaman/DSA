let n = 4;
let arr = new Array(n);

for(let i=0;i<n;i++){
    arr[i]=new Array(n).fill(".");
}


queen(arr,0);


let arr2=[];
for(let i=0;i<n;i++){
    let arr3=new Array(n);
    for(let j=n-1;j>=0;j--){
        arr3[n-1-j]=arr[i][j]
    }
    arr2.push(arr3);
}
let arr3=[];
let arr4=[];
let arr5=[];

for(let a of arr){
    let s = a.join("");
    arr4.push(s);
}
arr3.push(arr4);
for(let a of arr2){
    let s = a.join("");
    arr5.push(s);
}
arr3.push(arr5);
console.log(arr3);

function queen(arr,row){
    if(row>=n){
        return true;
    }
    for(let i=0;i<n;i++){
        debugger;
        if(isSafe(arr,row,i)){
            
            arr[row][i]="Q";
            if(queen(arr,row+1)){
                return true;
            }
            arr[row][i]=".";
            
        }
    }
    return false;
    
}
function isSafe(arr,row,col){
    debugger;

    for(let i=row;i>=0;i--){        
        if(arr[i][col]=='Q'){
           return false;
        }
    }

    for(i=row,j=col;i>=0 && j>=0;i--,j--){
        if(arr[i][j]=='Q'){           
            return false;
        }
    }
    for(i=row,j=col;i>=0 && j<n;i--,j++){       
        if(arr[i][j]=='Q'){
            return false;
        }
    }
    
    return true;

}