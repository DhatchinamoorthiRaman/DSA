let a=[-1, 2, 3, -4, 5 , 2, 6];
// a.sort((a,b)=> a-b)
let res=0;
var c=new Set();
var key=0;
for(let i=0;i<a.length;i++){
    let b=[];
    let sum=0;
    console.log("hi");
    // b.push(a[i]);
  
    // sum=a[i];
    // a[i]=undefined;
    for(let j=0;j<a.length;j++){
        sum+=a[j];
        if(sum<=res){  
            b.push(a[j]);
            // a[j]=undefined;
        }      
        else{
            while(sum>res){
                sum-=b.pop()
            }
            b.push(a[j]); 
            // a[j]=undefined;         
        }
        if(sum==res){
            
            let d=[...b];
           while(b.length>0){
            b.pop();
           }
            let g=0;        
            let e=c.values();
            for(let r of e){
                if(JSON.stringify(r)==JSON.stringify(d)){
                    g=1;
                    break;                    
                }
            }
            if(g==0){
                c.add(d);
            }          
        }
    }
}
console.log(c);
console.log(a);