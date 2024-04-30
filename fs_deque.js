class Node {
    constructor(val) {
       this.val = val;
       this.previous = null;
       this.next = null;
    };
 }

class DoublyLinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.size = 0;
    }

    insert(val) {
        let node = new Node(val);
    
        if (!this.first) {
          this.first = node;
          this.last = node;
        } else {
          this.last.next = node;
          node.previous = this.last;
          this.last = node;
        }
        
        this.size++;
    }

    insertHead(val) {
        let node = new Node(val);
    
        if (!this.first) {
          this.first = node;
          this.last = node;
        } else {
          node.next = this.first;
          this.first.previous = node;
          this.first = node;
        }
        
        this.size++;
    }

    remove() {
        if (!this.last) throw new Error("can't remove a node from an empty linked list!");

        let temp = this.last;
        if (this.first == this.last) {
            this.last = null;
        }
        temp.previous.next = null;
        this.size--;

        return temp.val
    }
    
    removeHead() {
        if (!this.head) throw new Error("can't remove a node from an empty linked list!"); 

        let temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--
        return temp.val;
    }

    peekFirst() {
        return this.first.val;
    }

    peekLast() {
        return this.last.val;
    }
    
    isEmpty() {
        return this.size === 0
    }
}


class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this._list = new DoublyLinkedList();
    }

    appendleft(val) {
        this._list.insertHead(val);
    }

    appendright(val) {
        this._list.insert(val)
    }

    popleft() {
        return this._list.removeHead();
    }

    popright() {
        return this._list.remove();
    }

    peekleft() {
        return this.first.val;
    }

    peekright() {
        return this.last.val;
    }

    isEmpty() {
        return this.size === 0
    }
}
