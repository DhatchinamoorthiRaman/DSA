let text="geeksforgeeks";
let pattern="geeks";
let d = 26;
let arr=[];
let q=101;
// let s='z';
// console.log(s.charCodeAt(0)-'a'.charCodeAt(0)+1);
let p=0;
let t=0;
let m=pattern.length;
for(let i=0;i<m;i++){
    p = p * d;
    t = t * d;
    p = p + ((pattern.charAt(i) - 'a'.charCodeAt(0) + 1) % q);
    t = t + ((text.charAt(i) - 'a'.charCodeAt(0) + 1) % q);
  }


console.log(p);
for(let i=0;i<text.length-m;i++){
    
    if(p===t){
        let j=0;
        for(;j<m;j++){
            if(pattern.charAt(j)!=text.charAt(i+j)){
                
                break;
            }
        }
        if(j==m){
            console.log("pattern found at index : ",i);
        }
    }
   
        if(i<text.length-m){
            t = t - ((text.charAt(i) - 'a'.charCodeAt(0) + 1) * Math.pow(d, pattern.length - 1));
            t = t * d + (text.charAt(i + pattern.length) - 'a'.charCodeAt(0) + 1);
        }
    
}
