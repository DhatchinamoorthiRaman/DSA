var vertices=["a","b","c","d","e"];
var arr=[];
for(let i =0;i<vertices.length;i++){
    arr[i]=[];
    for(let j=0;j<vertices.length;j++){
        // arr[i].push(0);
        arr[i][j]=0;
    }
}

function addVertex(ele1,ele2){
    arr[vertices.indexOf(ele1)][vertices.indexOf(ele2)]=1;
    arr[vertices.indexOf(ele2)][vertices.indexOf(ele1)]=1;
}
function print(arr){
    for(let i=0;i<arr.length;i++){
        
        var str="";
        for(let j=0;j<arr.length;j++){
         
            if(arr[i][j]==1){
                
                str+=vertices[j]+" ";
    
            }
    
        }
        console.log(vertices[i]+" ->"+str);
    }

}
addVertex("a","b");
addVertex("a","c");
addVertex("a","d");
addVertex("b","d");
addVertex("b","c");
// console.log(arr);
// addVertex("c","e");
print(arr);

