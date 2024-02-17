var a=[10,20,30,40,50,60];
var ele=20;
var f=0;
function binarySearch(a,ele){
  
    if(a.length<1){
        return null;
    }
    let m=a[Math.floor(a.length/2)];
    if(ele==m){
        f++;
        return 1;
    }
     
    if(ele<m){
       
        binarySearch(a.slice(0,a.length/2),ele);

    }
    else if(ele>m){
      
        binarySearch(a.slice(a.length/2+1,a.length),ele);

    }
    }
binarySearch(a,ele);
if(f==0){
    console.log("not found");
}
else{
    console.log("found");
}