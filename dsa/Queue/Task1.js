/* Queue - first in first out */
/* We can implement Queue in JS with Array */

function Queue(){
    var collection = []; // empty array ထဲမှာQueueထဲကelementတေွကိုသိမ်းဖို့

    // queueတစ်ခုလုံးကိုprintထုတ်ပေးဖို့
    this.print = function(){
        console.log(collection);
    };

    // this method add an element to the end of the queue using push()
    this.enqueue = function(element){
        collection.push(element);
    };

    // this method removes and returns the first element using shift()
    this.dequeue = function(){
        return collection.shift(); // shift() pulls off the first item of the array
    };

    // this method returns the first item in the queue without removing it
    this.front = function(){
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    };

    // this method returns true if the queue has no elements
    this.isEmpty = function(){
        return(collection.length === 0);
    };
};

var q = new Queue();
q.enqueue('a'); // Queue: ['a']
q.enqueue('b'); // Queue: ['a', 'b']
q.enqueue('c'); // Queue: ['a', 'b', 'c']
q.print(); // Output: ['a', 'b', 'c']
q.dequeue(); // Removes 'a'
q.front(); // Returns 'b'
q.print(); // Output: ['b', 'c']