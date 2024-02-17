// let arr = [1,2,3];
// let sum = 4;
let arr=[2,5,3,6];
let sum=10;
let n = arr.length;
// recursion
// console.log(count(arr,sum,n));
// function count(arr,sum,n){
//     if(n==0){
//         return 0;
//     }
//     if(sum<0){
//         return 0;
//     }
//     if(sum==0){
//         return 1;
//     }
//     return(count(arr,sum,n-1)+count(arr,sum-arr[n-1],n));
// }


// dp programming : tabulation
function count(arr,sum,n){
    let dp = new Array(sum+1).fill(0);
    dp[0]=1;
    console.log(dp);
    for(let i=0;i<n;i++){
        for(let j=arr[i];j<=sum;j++){
            dp[j]=dp[j]+dp[j-arr[i]]
        }
        console.log(dp);
    }
    console.log(dp);
    return dp[sum];


}
console.log(count(arr,sum,n));
