class Queue{
    constructor(){
        this.arr=[];
    }
    enqueue(element){
        this.arr.push(element);
    }
    dequeue(){
        if(this.arr.length>0){
            var ele = this.arr[0];
            for(let i=0;i<this.arr.length;i++){
                this.arr[i]=this.arr[i+1];
            }
            this.arr.length--;
            return ele;

        }
        return null;
    }
    start(){
        return this.arr[0];
    }
    end(){
        return this.arr[this.arr.length-1];
    }
    isEmpty(){
        if(this.arr.length>0){
            return false;
        }
        return true;
    }
    clear(){
        return this.arr=[];
    }
    show(){
        return this.arr;

    }
}
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.show());
console.log("dequeue :",q.dequeue());
console.log(q.show());
q.enqueue(3);
console.log("show :",q.show());
q.enqueue(4);
console.log("show :",q.show());

console.log("dequeue :",q.dequeue());

console.log("isempty :",q.isEmpty());
q.clear();
console.log("isempty :",q.isEmpty());
