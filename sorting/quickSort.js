var a=[1,4,2,8,4,6,9];
function quickSort(a){
    if(a.length<=1){
        return a;
    }
    var left=[];
    var right=[];

    var pivot=a[0];
    for(let i=1;i<a.length;i++){
        if(a[i]<pivot){
            left.push(a[i]);
        }
        else{
            right.push(a[i]);
        }
    }
   
   return[...quickSort(left),pivot,
    ...quickSort(right)];
   

}
console.log(quickSort(a));