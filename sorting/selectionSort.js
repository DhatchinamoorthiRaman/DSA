var a=[1,4,2,8,4,6,9];
function selectionSort(arr){
    for(let i=0;i<a.length;i++){
        let min=a[i];
        for(var j=i+1;j<a.length;j++){
            if(a[j]<min){
                min=a[j];
                ind=j

            }
        }
        if(a[i]>min){
            let t=a[i];
            a[i]=a[ind];
            a[ind]=t;

        }

    }
    return a;
}
console.log(selectionSort(a));

