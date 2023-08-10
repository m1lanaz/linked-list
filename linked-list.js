// This is the linked list node 

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// This is the actual linked list
// If a node is not passed then the head is initialised to null

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

