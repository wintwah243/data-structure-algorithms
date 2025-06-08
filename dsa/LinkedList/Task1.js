/*
    LinkedList is like an array but it stores items in nodes
    Each node points to the next node
    It’s useful for dynamic data where we need to add/remove items easily
*/

function LinkedList() {
    var length = 0; // linkedlist sizeကို trackပေးဖို့
    var head = null; // head is first node in the list

    // function to create a node
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    // method to get the list'size
    this.size = function () {
        return length;
    };

    // method to get the first node in the list
    this.head = function () {
        return head;
    };

    // method to add a new element to the end of the linked list
    this.add = function (element) {
        var node = new Node(element); // create new node
        if (head === null) { // check if the list is empty
            head = node;
        } else {
            // LinkedListတစ်ခုလုံးကိုloopပတ်ဖို့အတွက်ပထမဆုံးitemကိုအရင်စထည့်ပြီးloopပတ်ဖို့လုပ်မယ်
            var currentNode = head; // start at the beginning of the list

            // current nodeရဲ့next nodeကnullမဖြစ်မချင်းloopပတ်မယ်
            while (currentNode.next) { 
                currentNode = currentNode.next;
            }

            // null ဖြစ်နေတဲ့next nodeထဲကိုnew nodeထည့်မယ်
            currentNode.next = node; // add new node
        }

        length++; // increase the length variable by 1 because we added a new node
    };

    // method to remove a node from the linked list
    this.remove = function (element) {
        var currentNode = head; // start at the beginning of the list
        var previousNode;
        if (currentNode.element === element) { // check if the first node (head) is the one we want to remove
            head = currentNode.next; // Then we make the next node the new head
        } else {
            /*
                our linkedlist example - "apple" → "banana" → "cherry" (Remove item-banana)
                currentNode starts at "apple"
                "apple".element !== "banana"
                So we go inside the while loop
                previousNode = currentNode → previousNode = "apple"
                currentNode = currentNode.next → currentNode = "banana"
                Now, currentNode.element === "banana"
                The loop stops.
            */
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            /*
                previousNode = "apple"
                currentNode = "banana"
                currentNode.next = "cherry"
            */
            previousNode.next = currentNode.next;
        }

        length--; // decrease the length variable by 1 because we remove a node
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.indexOf = function (element) {
        var currentNode = head; // Start at the beginning of the list (the first node)
        var index = -1; // indexက0ကစတာမို့လို့inital valueကို-1ထားပြီးincrementလုပ်သွား

        while (currentNode) { // loop through untill currentNode becomes null
            index++; // Increase index as we move to the next node

            // Check if the current node contains the element we’re looking for
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next; // Move to the next node and continue checking
        }

        return -1; // return -1 if the item we want to find is not in the list
    };

    // method to return the value stored at a specific index in the linked list
    this.elementAt = function (index) {
        var currentNode = head; // Start at the beginning of the list

        var count = 0; // Initialize a counter to track how far we've gone in the list

    // loop through the list until count matches the index we want
        while (count < index) {
            count++; // increate count and
            currentNode = currentNode.next; // move to the next node
        }
        return currentNode.element; // currentNode is now the node at the requested index
    };

    // method to add an element at a specific position in the linkedlist
    this.addAt = function (index, element) {
        var node = new Node(element); // Create a new node that holds the element we want to insert
        var currentNode = head; // Start from the beginning of the list
        var previousNode;
        var currentIndex = 0; // to count how far we’ve gone

        // If the index is bigger than the list size, we return false
        if (index > length) {
            return false;
        }

        // insert at the beginning
        /*
            Before: head → apple → banana → cherry
            Add "orange" at index 0:
            Step 1: orange.next = head (apple)
            Step 2: head = orange
            After: head → orange → apple → banana → cherry
        */
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            // loop until we reach the index
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }

        length++;
    };

    // method to remove a node at a specific index from a linked list
    this.removeAt = function (index) {
        var currentNode = head; // start at the beginning of the list
        var previousNode;
        var currentIndex = 0; // to count how far we’ve gone

        // If the index is bigger than the list size or negative, return null
        if (index < 0 || index >= length) {
            return null;
        }
        // If removing the first node
        if (index === 0) {
            head = currentNode.next;
        } else {
            // loop until we reach the index
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    };
};

var var1 = new LinkedList();

var1.add("Dog"); // [Dog] → null
var1.add("Cat"); // [Dog] → [Cat] → null
var1.add("Fish"); // [Dog] → [Cat] → [Fish] → null
var1.add("Dino"); // [Dog] → [Cat] → [Fish] → [Dino] → null
var1.add("Horse"); // [Dog] → [Cat] → [Fish] → [Dino] → [Horse] → null
console.log(var1.size()); // 5
console.log(var1.removeAt(3)); // Dino
console.log(var1.size()); // 4