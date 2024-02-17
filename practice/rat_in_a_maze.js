let arr=[[1,0,0,0],[1,1,0,1],[1,1,0,0],[1,1,1,1]];
let n=arr.length;
pathfinding(arr,n);
function pathfinding(arr,n){
    let sol = new Array(n);
    for(let i=0;i<n;i++){
        sol[i]=new Array(arr[i].length).fill(0);        
    }
    if(pathfind(arr,sol,0,0)===true){
        console.log("path found");
        console.log(sol);
    }
    else{
        console.log("path not found");
        console.log(sol);
    }

}
function isSafe(x,y,n,arr){
    return(x>=0 && x<n && y>=0 && y<n && arr[x][y]==1);
}
function pathfind(arr,sol,x,y){
    if(x==n-1 && y==n-1 && arr[x][y]==1){
        sol[x][y]=1;
        console.log("1if");
        return true
    }
    if(isSafe(x,y,n,arr)==true){
        if(sol[x][y]==1){
            return false;
        }
        sol[x][y]=1;
        if(pathfind(arr,sol,x+1,y)){
            return true;
        }
        if(pathfind(arr,sol,x,y+1)){
            return true;
        }
        if(pathfind(arr,sol,x-1,y)){
            return true;

        }
        if(pathfind(arr,sol,x,y-1)){
            return true;
        }
       
        sol[x][y]==0;
        return false;

    }
    return false;

}