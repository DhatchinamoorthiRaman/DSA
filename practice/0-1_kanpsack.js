let cost=[60,100,120];
let wt=[1,2,3];
let n = cost.length;
let limit = 5;
console.log(knapsack(cost,wt,n,limit));
function knapsack(cost,wt,n,limit){
    let dp=new Array(limit+1).fill(0);
    for(let i=1;i<=n;i++){
        for(w=limit;w>=0;w--){
            if(wt[i-1]<=w){
                dp[w]=Math.max(dp[w],dp[w-wt[i-1]]+cost[i-1]);
            }
        }
    }
    return dp[limit];

}