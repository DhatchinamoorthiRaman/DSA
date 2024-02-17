class node{
    constructor(element){
        this.element=element;
        this.prev=null;
        this.next=null;
    }
}
class doublyLinkedList{
    debugger
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insert(element){
        debugger
        var newNode = new node(element);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            // var temp = this.head;
            var temp = this.tail;
            
            // while(temp.next!=null){
            //     temp=temp.next;
            // }
            // temp.next=newNode;
            // newNode.prev=temp;
            temp.next=newNode;
            newNode.prev=temp;
            this.tail=newNode;
        }
        this.size++;
    }
    insertAtBeginning(element){
        debugger
        var newNode = new node(element) ;
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;

        }
        else{
            var temp=this.head;
            this.head=newNode;
            this.head.next=temp;
            temp.prev = this.head;
        }
        this.size++;
    }
    insertAtPosition(element,position){
        debugger
        
        if(position<1 || position>=this.size+1){
            console.log("please enter valid position");
        }
        else{
            var newNode = new node(element);
            if(position===1){
                // var temp = this.head;
                // this.head = newNode;
                // this.head.next=temp;
                // temp.prev = this.head;
                this.insertAtBeginning(element);
            }
            else{
                var temp = this.head;
                var prevnode;
                
                var i=0;
                while(i<position-1){
                    prevnode=temp;
                    temp = temp.next;
                    i++;
                }
                newNode.next=temp;
                prevnode.next=newNode;
                newNode.prev=prevnode;
                if(temp!=null){
                    temp.prev=newNode;

                }
                else{
                    this.tail=newNode;
                }
                
    
    
            }
            this.size++;

        }
       
        
    }
    deleteAtBeginning(){
        debugger
        var temp = this.head;
        this.head = temp.next;
        this.head.prev=null;
        this.size--;
    }
    deleteAtEnd(){
        debugger
        var temp = this.tail;
        this.tail=temp.prev;
        this.tail.next=null;
        this.size--;
    }
    delete(element){
        debugger
        var temp = this.head;
        var prevnode;
        while(temp!=null){
            if(temp.element===element){
                prevnode.next=temp.next;
                if(temp.next!=null){
                    temp.next.prev=prevnode;

                }
                else{
                    this.tail=prevnode;
                }
               

            }
            prevnode=temp;
            temp=temp.next;
           
        }
      
    }
    show(){
        debugger
        var temp = this.head;
        var str = "";
        while(temp!=null){
            str+=temp.element+" ";
            temp=temp.next;

        }
        return str;
    }
    
}
var dll = new doublyLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.insertAtBeginning(1);
console.log(dll.show());
dll.insertAtPosition(2,1);
console.log(dll.show());
dll.deleteAtBeginning();
console.log(dll.show());
dll.deleteAtEnd();
console.log(dll.show());
dll.delete(20);
console.log(dll.show());
