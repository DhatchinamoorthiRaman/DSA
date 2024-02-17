// let arr = [[ 1, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 1],[1, 0, 0, 1, 1] ,[0, 0, 0, 0, 0], [1, 0, 1, 0, 1]];
let arr=[[1,1,1],[0,1,0],[0,1,0]];
let n = arr.length;
islands(arr,n);
function islands(arr,n){
    let visited = new Array(n);
    for(let i=0;i<n;i++){
        visited[i]=new Array(n).fill(false);
    }
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]==1 && !visited[i][j]){
                logic(arr,i,j,visited);
                count++;
            }
        }
    }
    console.log("no of islands : ",count);
    console.log(visited);
}
function logic(arr,x,y,visited){ 
    debugger;

    // let row=[-1,-1,-1,0,0,1,1,1];
    // let col = [-1,0,1,-1,1,-1,0,1];
    let row=[-1,0,0,1];
    let col=[0,-1,1,0];
    visited[x][y]=true;
    for(let i=0;i<row.length;i++){
        if(isSafe(arr,visited,x+row[i],y+col[i])==true){
            logic(arr,x+row[i],y+col[i],visited);
        }
    }
}
function isSafe(arr,visited,x,y){
    return(x>=0 && x<arr.length && y>=0 && y<arr.length && arr[x][y]==1 && !visited[x][y]);
}
