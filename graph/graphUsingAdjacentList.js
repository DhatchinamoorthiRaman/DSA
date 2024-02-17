var m = new Map();

function addEdges(x,y){
    if(!m.has(x)){
        m.set(x,[]);

    }
    if(!m.has(y)){
        m.set(y,[]);
    }
    m.get(x).push(y);
    m.get(y).push(x);
}
function print(m){
    let k = m.keys();
    for(let i of k){
        let str="";
        let v=m.get(i);
        for(let j of v){
            str+=j+" ";
        }
        console.log(i+"->"+str);
    }

}
addEdges(1,2);
addEdges(1,3);
addEdges(1,4);
addEdges(2,3);
addEdges(2,4);
print(m);
