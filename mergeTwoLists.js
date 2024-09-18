{/*
    Question:=>
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.

    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]
    Example 2:

    Input: list1 = [], list2 = []
    Output: []
    Example 3:

    Input: list1 = [], list2 = [0]
    Output: [0]

    Solution:
    */}




class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Helper function to add nodes to the linked list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Helper function to print the linked list values
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}


// Create the first sorted linked list


function mergeTwoSortedLists(list1, list2){
    console.log(list1,list2)
    let dummy = new Node(-1)
    let current = dummy

    while(list1 !== null && list2 !== null ){
        if(list1.value < list2.value ){
            current.next = list1
            list1 = list1.next
        }
        else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next;
    }

    if(list1 !== null){
        current.next = list1
    }
    if(list2 !== null){
        current.next = list2
    }

    return dummy.next
}
const list1 = new LinkedList();
list1.append(1);
list1.append(1);
list1.append(5);

// Create the second sorted linked list
const list2 = new LinkedList();
list2.append(2);
list2.append(3);
list2.append(4);

// Print the two lists
console.log("List 1:");
list1.print();

console.log("List 2:");
list2.print();

// Merge the two lists
const mergedList = new LinkedList();
mergedList.head = mergeTwoSortedLists(list1.head, list2.head);

// Print the merged list
console.log("Merged List:");
mergedList.print();

