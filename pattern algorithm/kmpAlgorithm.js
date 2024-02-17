let text = "geeks for geeks";
let pattern = "geeks";
// let text = "abc abcdab abcdabcdabde"
// let pattern = "abcdabde"

let t=[...text];
let n=t.length;
let p=[...pattern];
let m=p.length;
let lps=new Array(p.length);

kmpAlgorithm(lps,p,t,m,n);


function kmpAlgorithm(lps,p,t,m,n){
    computeLps(lps,p,m);
    let i=0;
    let j=0;
    while((n-i)>=(m-j)){
        if(t[i]===p[j]){
            i++;
            j++;
        }
        if(j==m){
            console.log("pattern found at index :",(i-j));
            j=lps[j-1];
        }
        else if(i<n && t[i]!=p[j]){
            if(j!=0){
                j=lps[j-1];
            }
            else{
                i++;
            }
        }
    }
}

function computeLps(lps,p,m){
    let i=1;
    let j=0;
    lps[0]=0;
    while(i!=m){
        if(p[i]===p[j]){
            lps[i]=j+1;
            j++;
            i++;
        }
        else{
            if(j==0){
                lps[i]=0;
                i++;
            }
            else{
                j=lps[j-1];
            }
        }
    }
}

// console.log(p)
// console.log(lps);



// let l=1;
// let i=0;
// let j=1;
// lps[i]=0;

// while(l!=lps.length){
//     if(p[i]===p[j]){
//         lps[l]=i+1;
//         i++;
//         j++;
//         l++;
//     }
//     else{
//         lps[l]=0;
//         j++;
//         l++;

//     }

// }
// console.log(lps);
// for(let i=0;i<t.length;i++){
    
    
//     if(t[i]==p[0]){
//         let c=1;
//         let j=1;
//         j+=lps[j-1];
//         c+=lps[j-1];
//         for(;j<p.length;j++){
//             if(t[i+j]==p[j]){
//                 c++;
    
//             }
//             else{
    
//                 break;
//             }
//         }
//         if(c==p.length){
//             console.log(i);

//         }
       

//     }
   
    
    

// }