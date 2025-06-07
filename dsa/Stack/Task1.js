/*
    Stack is Last In, First Out
    Stackကိုreverseတေွ undoတွေလုပ်တဲ့နေရာမှာသုံးတယ်
    For example - In a text editor, when you press undo, the last action you did is reversed first.
    this can be managed by a stack
*/

// stackတစ်ခုcreateလုပ်မယ်
var Stack = function() {
    this.count = 0; // stackထဲမှာitemဘယ်နှစ်ခုရှိလဲဆိုတာကိ့ track‌ေပေးဖို့
    this.storage = {}; // empty obj

    // add a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0){ // Stack ထဲမှာitemရှိမရှိစစ်မယ်
            return undefined;
        }

       // indexက0ကစတာမို့လို့တစ်ခုလျော့ပေး
        this.count--; // moves the top pointer one position down to the previous item
        var result = this.storage[this.count]; // we will fetch the top value
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    // peek နဲ့ pop ရဲ့ ကွာခြားချက်က
    // peekကremoveမလုပ်ဘူး popကremoveလုပ်တယ်

    //return the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count - 1]; // indexက0ကစတာမို့လို့တစ်ခုလျော့ပေး
    }
};

var myStack = new Stack();

myStack.push(1); // Stack: {0: 1}, count = 1
myStack.push(2); // Stack: {0: 1, 1: 2}, count = 2
console.log(myStack.peek()); // output-2
console.log(myStack.pop()); // output-2
console.log(myStack.peek()); // output-1
