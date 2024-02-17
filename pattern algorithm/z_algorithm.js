let text = "geeks for geeks";
let pattern = "geeks";
let z=[];
let con = pattern+"#"+text;
let arr=con.split("");
let n = arr.length;
// console.log(con)
z[0]=0;
var right=0;
var left=0;
for(let k=1;k<n;k++){
    if(k>right){
        left=k;
        right=k;
        while(right<n && arr[right]==arr[right-left] ){
            right++;
        }
        z[k]=right-left;
        right--;
    }
    else{
        let k1=k-left
        if(z[k1]<right-k+1){
            z[k]=z[k1];
        }
        else{
            left=k;
            while(right<n && arr[right]==arr[right-left]){
                right++;
            }
            z[k]=right-left;
            right--;
        }
    }

}
for(let i=pattern.length;i<z.length;i++){
    if(z[i]===pattern.length){
        console.log("pattern found at index : ",i-pattern.length-1);
    }
}



// for(let i=0;i<text.length;i++){
//     let c=0;
//     let k=i;
//     for(let j=0;j<pattern.length;j++){
        
//         if(text[k]===pattern[j]){
//             c++;

//         }
//         else{
//             break;
//         }
//         k++;
//     }
    
//     z[i]=c;
    
// }
// for(let i=0;i<z.length;i++){
//     if(z[i]===pattern.length){
//         console.log("pattern occur at :",i);
//     }
// }


    







