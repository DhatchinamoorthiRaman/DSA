
let nums=[-1,0,1,2,-1,-4];
console.log("ans",sum(nums));
function sum(nums) {
    debugger;
    let res=[]
    if(nums.length<3){
        return res;
    }
    nums.sort((a,b)=>{a-b});
    for(let i=0;i<nums.length-2;i++){
       
        
        let arr=[];
        arr.push(nums[i]);
        let sum=nums[i]
        for(let j=i+1;j<nums.length-1;j++){
         
            sum=sum+nums[j];
            arr.push(nums[j]);
            for(let k=j+1;k<nums.length;k++){
                if(sum+nums[k]==0){
                    arr.push(nums[k]);
                    let d=[...arr];
                    console.log(d);
                    res.push(d);
                    arr.pop();
                }
            }
            arr.pop();
                   

        }
        arr.pop();
        
    }
    return res;
    
};