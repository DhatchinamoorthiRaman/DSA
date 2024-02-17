let a=[[1,2,3],[1,3,2],[3,4,1]];
var n=3,cost=0,min,ind=a[0].length;
for(i=0;i<a.length;i++)
{
    
        min=10000;
    for(j=0;j<a[0].length;j++)
    {
        if(j==ind)
        continue;
      if(a[i][j]<min)
      {
      min=a[i][j];
      ind=j;
      }
    }
    cost+=min;
}
let ans=cost;
cost=0,ind=a[0].length;
for(i=a.length-1;i>=0;i--)
{
    
        min=10000;
    for(j=0;j<a[0].length;j++)
    {
        if(j==ind)
        continue;
      if(a[i][j]<min)
      {
      min=a[i][j];
      ind=j;
      }
    }
    cost+=min;
}
console.log(Math.min(cost,ans));