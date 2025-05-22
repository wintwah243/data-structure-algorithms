// This is Stack exercise - palindrom

// functions: push, pop, peek, length

var letters = []; // empty array တစ်ခုဆောက်မယ်

var word = "racecar";

var rword = ""; // empaty string for reversed word

// stack ထဲကို letter‌ တွေloopပတ်ပြီးထည့်မယ်
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// stack ထဲကနေ letterတွေကို reverse orderအတိုင်းloopပတ်ပြီးပြန်ထုတ်မယ်
for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword == word) {
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}