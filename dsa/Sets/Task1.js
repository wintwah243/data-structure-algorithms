/* this is Sets exericse */

/* set operations: add, remove, union, intersection, difference, and subset. */

function mySet(){
    //ဒီarryထဲကelementတွေကတစ်ခုနဲ့တစ်ခုမတူတဲ့unique valuesတွေဖြစ်ရမယ်ယ် 
    var collection = []; // this collection will hold the set

    // collection arrayထဲမှာelementရှိမရှိစစ်မယ့် method
    this.has = function(element){
        return(collection.indexOf(element) !== -1); // ရှိရင်true မရှိရင်false return ပြန်
    };

    // collection array တစ်ခုလုံးကို return ပြန်ဖို့အတွက်
    this.values = function(){
        return collection;
    };

    // Adds element only if it's not already present in the collection array
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        };
        return false;
    };

    // collection array ထဲကelementကို remove or delete လုပ်ဖို့အတွက်
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    // this method return the size of the collection
    this.size = function(){
        return collection.length;
    };

    // this method combines both sets without duplicates
    this.union = function(otherSet){
        var unionSet = new Set();
        var firstSet = this.values(); // this.values ဆိုတာ collection array
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method finds common elements between two sets
    this.intersection = function(otherSet){
        var intersectionSet = new mySet(); // intersectionSet will hold only the values that exist in both sets
        var firstSet = this.values(); // this.values ဆိုတာ collection array
        firstSet.forEach(function(e){
            if(otherSet.has(e)){ // commone elementရှိမရှိစစ်ပြီး ရှိရင်intersectionSetထဲထည့်
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    /* intersection နဲ့ difference နဲ့က ပြောင်းပြန် အလုပ်လုပ်တယ် */

    this.difference = function(otherSet){
        var differenceSet = new Set();
        var firstSet = this.values(); // this.values ဆိုတာ collection array
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){ 
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    /* every() is a built-in JavaScript method that runs a function for each item
     in an array, and only returns true if all return true */

    /* this method returns true if all elements in this set are also in otherSet */
    this.subset = function(otherSet){
        var firstSet = this.values(); // this.values ဆိုတာ collection array
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
};

var setA = new mySet();
var setB = new mySet();
setA.add("a"); // setA = ["a"]
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d"); // setB = ["b", "c", "a", "d"]
// This checks if every element of setA is also in setB
console.log(setA.subset(setB)); // output-true
console.log(setA.union(setB).values()); // output - Set(4) { 'a', 'b', 'c', 'd' }
console.log(setA.intersection(setB).values()); // output - [ 'a' ]
console.log(setA.difference(setB).values()); // output - { }
console.log(setA.has("f")); // output - false
console.log(setB.size()); // output - 4