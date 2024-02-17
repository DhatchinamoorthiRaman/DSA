
let arr=[1,2,2,3,4,5,6];
// arr.sort((a,b)=> a-b)
let result=6;
let sum=0,c=0;
outer:for(i=0;i<arr.length;i++)
{
    sum=0;
    let pr=[];
    let ind=[];
    for(j=i;j<arr.length;j++)
    {
        sum+=arr[j];
        if(sum>result)
        {
            sum-=arr[j];   // sum-=Number(pr.pop());
        }
    else
    {
    pr.push(arr[j]);
    ind.push(j);
    }
        if(sum==result)
        {
            c++;
            console.log(pr);
        for(i=0;i<ind.length;i++)
        {
         arr[ind[i]]=undefined;
        }
        break;
        }
    }
} 

for(let i=0;i<arr.length;i++)
{
    let pr=[];
    if(arr[i]!=undefined)
    {
    c+=1;
    pr.push(arr[i]);
    console.log(pr);
    }
    
}
console.log(c);



