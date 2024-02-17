class node{
    constructor(element){
        this.element = element;
        this.next=null;
    }

}
class circularLinkedList{
    constructor(){
        this.tail=null;
        this.head = null;
        this.size=0;
    }
    insert(element){
        var newNode = new node(element);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
            // this.tail.next=this.head;
            
        }
        else{
            var temp = this.tail;
            temp.next=newNode;
            this.tail=newNode;
            // this.tail.next=this.head;
        }
        this.tail.next=this.head;
        this.size++;
    }
    insertAtBeginning(element){
        var newNode = new node(element);
        if(this.head==null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            var temp = this.tail;
            temp.next=newNode;
            newNode.next=this.head;
            this.head=newNode;

        }
        
        this.size++;
    }
    insertAtPosition(element,position){
        if(position<1 || position>this.size+1){
            console.log("please enter valid position");
        }
        else{
            if(position===1){
                this.insertAtBeginning(element);

            }
            else{
                var newNode = new node(element);
                var temp=this.head;
                var prev;
                var i =0;
                while(i<position-1){
                    prev=temp;
                    temp=temp.next;
                    i++;

                }
                if(temp==this.head){
                    newNode.next=this.head;
                    this.head = newNode;

                }
                else{
                    newNode.next=temp;
                    prev.next=newNode;

                }
               
                
            }
            this.size++;
        }



    }
    delete(element){
        var temp = this.head;
        
        var prevnode;
        while(temp!=this.tail){
            if(temp.element===element){
                // if(temp==this.tail){
                //     prevnode.next=this.head;
                //     this.tail=prevnode;

                // }
                if(temp==this.head){
                    this.head=temp.next;
                    this.tail.next=this.head;
                   

                }
                else{
                    prevnode.next=temp.next;

                }
            }
            prevnode=temp;
            temp=temp.next;
            

        }
        if(temp.element===element && temp===this.tail){
            prevnode.next=this.head;
            this.tail=prevnode;

        }
        this.size--;


    }
    deleteAtBeginning(){
        this.head=this.head.next;
        this.tail.next=this.head; 
       
    }
    deleteAtEnd(){
        var temp = this.head;
        var prevnode;
        while(temp!=this.tail){
            prevnode=temp;
            temp=temp.next;
        }
        prevnode.next=this.head;
        this.tail=prevnode;
        this.size--;
        
    }
    show(){
        var temp = this.head;
        var str = "";
        while(temp!=this.tail){
            str+=temp.element+" ";
            temp=temp.next;

        }
        str+=temp.element;
        return str;
    }
   


}
var cll = new circularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.insert(30);
cll.insert(40);
console.log(cll.show());
cll.insertAtBeginning(1);
console.log(cll.show());
cll.insertAtPosition(2,6);
console.log(cll.show());
cll.deleteAtBeginning();
cll.delete(40);
cll.delete(10);
cll.delete(30);
console.log(cll.show());
cll.deleteAtBeginning();
console.log(cll.show());
cll.deleteAtEnd();
console.log(cll.show());
