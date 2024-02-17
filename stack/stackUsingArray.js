class Stack{
    constructor(){
        this.arr=[];
        this.size=0;
    }
    push(element){
        if(this.arr[0]!=null){
            for(let i=this.arr.length;i>0;i--){
                this.arr[i]=this.arr[i-1];
            }
            
        }
        this.arr[0]=element;
        
         

    }
    pop(){
        let ele = this.arr[0];
        for(let i=0;i<this.arr.length;i++){
            this.arr[i]=this.arr[i+1];
        }
        this.arr.length--;
        return ele;
    }
    peek(){
        return this.arr[0];
    }
    isEmpty(){
        if(this.arr.length===0){
            return true;

        }
        return false;
    }
    clear(){
        return this.arr=[];

    }
    length(){
        return this.arr.length;
    }
    show(){
        return this.arr;
    }

}
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.length());
console.log(stack.show());
console.log("peak element:",stack.peek());
console.log("element popped:",stack.pop());
console.log(stack.show());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.isEmpty());

