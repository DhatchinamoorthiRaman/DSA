let arr=[1,7,-1,4,-5,-5];
function zeroSum(arr){
    let left=0;
    let right=arr.length-1;
    while(left<arr.length && right>=0){
        console.log("hi");
        if((arr[left]-arr[right]==0 || arr[right]-arr[left]==0) && arr[left]!=arr[right]){
            break;
        }
        else{
            if(arr[left]<arr[right]){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return [left,right];
}
let[i,j]=zeroSum(arr);
console.log(arr[i]+","+arr[j]);