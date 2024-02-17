let n =12;
let a=[];
let i=1

while(a.length!=n){
    let c = grave(i);
    if(c){
        a.push(c);
    }
   
    i++;


}
function grave(no){
    let copy=no;
    if(no%2==0 || no%3==0){
        while(no!=1){
            if(no%2==0){
                no=no/2;
            }
            else if(no%3==0){
                no=no/3;
            }
            else{
                break;
            }
        }
       
      
    }
    if(no===1){
        return copy;

    } 
}
console.log(a);