
/* 
    A Priority Queue is a data structure similar to a regular queue (FIFO), 
    but each element has a priority 
*/

/* 
    The element with the highest priority (usually the lowest number) is dequeued 
    first, regardless of the insertion order
*/


function PriorityQueue(){
    var collection = []; // ဒီempty arrayထဲမှာsub-arrayတွေရှိမယ် eg: ['Name', priorityNumber]

    // this method output the entire queue, including names and their priorities
    this.printCollection = function(){
        (console.log(collection));
    };

    this.enqueue = function(element){
        if(this.isEmpty()){ // queueထဲမှာelementရှိမရှိစစ်ပြီးမရှိရင်sortingစီစရာမလိုဘဲတန်းထည့်မယ်
            collection.push(element); // First element — no sorting needed
        }else{
            var added = false;
            for(var i = 0; i < collection.length; i++){
                if(element[1] < collection[i][1]){ // checking priorities(Lower number = higher priority)
                    // Insert before the element with a higher priority number
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element); // Lowest priority will be added to end of the queue
            }
        }
    }; // enqueue method ends here

    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    };

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){
        return (collection.length === 0);
    }
};

var pq = new PriorityQueue();
pq.enqueue(['John', 2]); // [ ['John', 2] ]
pq.enqueue(['Tom', 3]); // [ ['John', 2], ['Tom', 3]  ]
pq.enqueue(['Rose', 1]); // [ ['Rose', 1], ['John', 2], ['Tom', 3] ]
pq.printCollection(); // [ ['Rose', 1], ['John', 2], ['Tom', 3] ]
pq.dequeue(); // [ ['John', 2], ['Tom', 3]  ]
pq.dequeue(); // [ ['Tom', 3] ]
pq.front(); // [ ['Tom', 3] ]
pq.printCollection(); // [ ['Tom', 3] ]
