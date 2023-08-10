// Linked list node class
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked list class
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    // Return the number of nodes in the linked list
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    // Clears the list
    clear() {
        this.head = null;
    }

    // Return last node of the list
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    // Return the first node of the list
    getFirst() {
        return this.head;
    }
}




// Example usage
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

const linkedList = new LinkedList(node1);
console.log(linkedList.size());      // Output: 3
console.log(linkedList.getLast());   // Output: ListNode { data: 3, next: null }
console.log(linkedList.getFirst());  // Output: ListNode { data: 1, next: ListNode { data: 2, next: [Object] } }

linkedList.clear();
console.log(linkedList.size());      // Output: 0
console.log(linkedList.getFirst());  // Output: null
