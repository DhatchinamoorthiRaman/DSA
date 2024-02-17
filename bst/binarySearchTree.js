// import Queue from "../queue/queueUsingArray.js";
class node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right = null;
    }
   
}

var root = null;
// function insert(data){
//     root = insertt(root,data)
  
// }
function insertt(root,data){
    
    if(root===null){
        root = new node(data);
        return root;
       
    }
    else if(root.data>data){
        root.left = insertt(root.left,data);
    }
    else if(root.data<data){
        root.right = insertt(root.right,data);
    }
    return root;
    
  
  


}
function inorder(root){
    if(root===null){
        return;
    }
   
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);

}
function preorder(root){
    if(root===null){
        return;
    }
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);

}
function postorder(root){
    if(root===null){
        return;
    }
   
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);

}
function bsf(root){
    var le=root;
    var ri=root;
    var q = [];
    var arr=[];
    q.push(root)
    while(q.length!=0){
        var ele = q.shift();
        if(ele!=null){
            arr.push(ele.data);
            le=ele.left;
            ri=ele.right;
            // if(le!=null ||  ri!=null){
                if(le!=null){
                    q.push(le);
                }
                // else{
                //     q.push(null);
                // }
                if(ri!=null){
                    q.push(ri);
                }
                // else{
                //     q.push(null);
                
                // }
            }
        // }
        // else{
        //     arr.push(ele);          
        // }
        }
        return arr;
}
function height(root){
    if(root===null){
        return -1;
    }
    var leftHeight = height(root.left);
    var rightHeight = height(root.right);
    return Math.max(leftHeight,rightHeight)+1;

}
function commonAncestor(root,ele1,ele2){
    if(root===null){
        return null;
    }
    if(root.data>ele1 && root.data>ele2){
       return commonAncestor(root.left,ele1,ele2);
    }
    if(root.data<ele1 && root.data<ele2){
        return commonAncestor(root.right,ele1,ele2);
     }
     return root.data;

}
function deleteNode(root,data){
    if(root===null){
        return -1
    }
 
    if(root.data>data){
        root.left=deleteNode(root.left,data);
    }
    else if(root.data<data){
        root.right=deleteNode(root.right,data);
    }
    else{
        if(root.right==null){

            return root.left;
        }
        else if(root.left===null){
            return root.right;
        }
        else{
            var min=minimum(root.right);
            root.data=min;
            deleteNode(root.right,min);
            

        }
    }
    return root;
}
function minimum(root){
   
    var min;
    while(root.left!=null){
        min=root.left.data;
        root=root.left
    }
    return min;
}
var s=0;
function sumofSingleParentNode(root){
   
    if(root===null){
        return -1;
    }

    if((root.left!=null && root.right==null) || (root.left==null && root.right!=null)){
        s++;
    }
    sumofSingleParentNode(root.left);
    sumofSingleParentNode(root.right);   
 
}
function mirror(root){
    if(root===null){
        return root;
    }
    var le=mirror(root.left);
    var ri=mirror(root.right);
    root.left=ri;
    root.right=le;
    return root;
}
function verticalTraversal(root,a,m){
    if(root===null){
        return root;
    }
    if(a in m == false){
    
        m[a]=new Array();
    }
    
    m[a].push(root.data);
    
    verticalTraversal(root.left,a-1,m);
    verticalTraversal(root.right,a+1,m);


} 
function printVerticalTraversal(root){
    
    var m={};
    var a=0;
    verticalTraversal(root,a,m);
    var arr = new Array();
    for(let key in m){
        var y=new Array();
        y.push(parseInt(key));
        for(let i=0;i<m[key].length;i++){
            y.push(m[key][i]);

        }
        arr.push(y);
    }
    arr.sort((a,b)=>{
        return a[0]-b[0];
    })
    for(let i=0;i<arr.length;i++){
        var str=" ";
        for(let j=1;j<arr[i].length;j++){
            str+=arr[i][j]+",";
            
        }
        console.log(str);
    }

}


root=insertt(root,100);
root=insertt(root,20);
// root=insertt(root,200);
root=insertt(root,10);
root=insertt(root,30);
root=insertt(root,150);
root=insertt(root,125);
root=insertt(root,300);
root=insertt(root,250);
root=insertt(root,400);
var arr=[];
arr=bsf(root);

console.log(arr);
// deleteNode(root,100);
console.log("inorder");
inorder(root);

// console.log(bsf(root));

// console.log("height of the tree ",height(root));
// console.log(commonAncestor(root,150,10));
// sumofSingleParentNode(root);
// console.log(s);
// mirror(root);
// console.log("after mirror : ");
// inorder(root);
// console.log(bsf(root));
// console.log(sumofSingleParentNode(root))
// console.log(minimum(root.right.right))
// console.log("inorder");
// inorder(root);
// console.log("preorder");
// preorder(root);
// console.log("postorder");
// postorder(root);

printVerticalTraversal(root);