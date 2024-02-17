class node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    enqueue(element){
        var newNode = new node(element);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
            
        }
        else{
            var temp = this.tail;
            temp.next=newNode;
            this.tail=newNode;
            
        }
        this.size++;

    }
    dequeue(){
        if(this.head!=null){
            var temp = this.head;
            var ele = temp.element;
            temp=temp.next;
            this.head = temp;
        }
        else{
            return null;
        }
        this.size--;
        return ele;
      
    }
    start(){
        return this.head.element;

    }
    end(){
        return this.tail.element;
    }
    isEmpty(){
        if(this.head===null){
            return true;
        }
        return false;
    }
    show(){
        var temp = this.head;
        var str="";
        while(temp!=null){
            str+=temp.element+" ";
            temp=temp.next;

        }
        return str;
    }
    toArray(){
        var temp = this.head;
        var arr=[];
        while(temp!=null){
            arr.push(temp.element);
            temp=temp.next;
        }
        return arr;
    }
    clear(){
        return this.head=this.tail=null;

    }
}
var q= new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.show());
console.log("dequeue :",q.dequeue());
console.log(q.show());
q.enqueue(3);
console.log("show :",q.show());
q.enqueue(4);
console.log("show :",q.show());
console.log("array : ",q.toArray());
console.log("dequeue :",q.dequeue());
console.log("array : ",q.toArray());
console.log("isempty :",q.isEmpty());
q.clear();
console.log("isempty :",q.isEmpty());
