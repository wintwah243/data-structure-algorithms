/* 
    Where to use hash tables? 
    We use hash tables when we need to look up something very quickly
    Hash table က Key-value pairတွေနဲ့အလုပ်လုပ်တယ်
    same index ကို hashလုပ်မိတာမျိုးမဖြစ်စေဖို့ new arrayတစ်ခုတည်ဆောက်ပြီးcollision ကိုကာကွယ်တယ်
*/

var hash = (string, max) => { // max is for the size of the hash table
    var hash = 0; // initial value ဒါမပါရင်reference errorတက်
    
    // loop through each character
    for(var i = 0; i < string.length; i++){
        hash += string.charCodeAt(i); // we will get Unicode number(ASCII code) of each character
    }
    return hash % max; // this makes a number that can be used as an index in an array
};

let HashTable = function(){
    let storage = []; // container for the hash table
    const storageLimit = 4; // size of hash table

    this.print = function(){
        console.log(storage);
    }

    // method to store key-value pairs in the hash table
    this.add = function(key, value){
        var index = hash(key, storageLimit); // we pass the key into the hash table with the index in the array
        if(storage[index] === undefined){ // if there's is nothing stored at that index
        // ဘာလို့new arrayကိုcreateလုပ်ရလဲဆိုရင်multiple keysတွေကတူညီတဲ့indexကိုhashမိမှာစိုးလို့ collisionကိုhandleဖို့အတွက်
            storage[index] = [ // create new array with key-value pair
                [key, value]
            ];
        }else{ // if something exists at that index
            var inserted = false;
            // we will find it loop through every key-value pair
            for(var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true; // this means we successfully updated new key-value pair at that index
                }
            }
            // If the loop didn’t find the key, it means it’s a new key
            if(inserted === false){
                storage[index].push([key, value]); // So we add it (push it) to the array (bucket) at that index
            }
        }
    };

    // method to remove key-value pair from the hash table
    this.remove = function(key){
        var index = hash(key, storageLimit); // hash the key to get its index
    // check if this bucket only has one item, and that item’s key matches the one we want to remove
        if(storage[index].length === 1 && storage[index][0][0] === key){
            delete storage[index]; // then we just delete it
        }else{ // if the bucket has more than one item
            // loop through the whole bucket
            for(var i = 0; i < storage[index]; i++){
                if(storage[index][i][0] === key){
                    storage[index].splice(i, 1); // delete specific item
                }
            }
        }
    };

    // method to search for a value based on its key
    this.lookup = function(key){
        var index = hash(key, storageLimit); // hash the key to get its index
        if(storage[index] === undefined){
            return undefined; // it means the item we want to find not exists in the table
        }else{
            // loop through the whole bucket
            for(var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){ // if we find key
                    return storage[index][i][1]; // return its value
                }
            }
        }
    };
};

console.log(hash('Queen', 10));

let ht = new HashTable();
ht.add('tom', 'person'); // index 0
ht.add('jack', 'dog'); // index 1
ht.add('rex', 'horse'); // index 3
ht.add('lucy', 'cat'); // index 1
ht.print();
