
class node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.head=null;
        this.size=0;
    }
    push(element){
        var newNode = new node(element)
        if(this.head===null){
            this.head=newNode;

        }
        else{
            var temp = this.head;
            newNode.next = temp;
            this.head = newNode;
        }
        this.size++;
    }
    pop(){
        if(this.head===null){
            return null;
        }
        var temp = this.head;
        let ele = temp.element;
        temp=temp.next;
        this.head=temp;
        this.size--;
        return ele;


    }
    peak(){
        if(this.head===null){
            return null;
        }
      
        return this.head.element;
       
    }
    isEmpty(){
        if(this.head===null){
            return true;
        }
        return false;
    }
    length(){
        return this.size;
    }
    clear(){
        return this.head=null;
    }
    show(){
        var temp = this.head;
        var str = "";
        while(temp!=null){
            str+=temp.element+" ";
            temp=temp.next;
        }
        return str;
    }
    toArray(){
        var arr= [];
        var temp =this.head;
        while(temp!=null){
            arr.push(temp.element);
            temp=temp.next;
        }
        return arr;

    }

   
}
var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.length());
console.log(stack.show());
console.log(stack.peak());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
console.log(stack.show());
console.log(stack.toArray());
stack.clear();
console.log(stack.peak());
console.log(stack.pop());



