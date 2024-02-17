let str = "gekforek";
function lps(arr,i,j){
    if(i===j){
        return 1;
    }
    if((arr[i]===arr[j])&& (i+1==j)){
        return 2;
    }
    if(arr[i]==arr[j]){

        return lps(arr,i+1,j-1)+2;
    }
    // console.log(arr.slice(i,j-1));
    return Math.max(lps(arr,i,j-1),lps(arr,i+1,j));

}
let n=str.length;
console.log(lps(str.split(""),0,n-1));