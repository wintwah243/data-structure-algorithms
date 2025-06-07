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
    rword += letters.pop(); // take last letter from array and add to rword
}

/*
    1st loop: rword = "o" (popped "o")
    2nd loop: rword = "ol" (popped "l")
    3rd loop: rword = "oll" (popped "l")
    4th loop: rword = "olle" (popped "e")
    5th loop: rword = "olleh" (popped "h")
*/

if(rword == word) {
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}
