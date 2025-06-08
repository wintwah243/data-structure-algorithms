/*
    Two pointer example
    We use two pointer when we need to find a pair or set of elements with a condition 
    (like sum, distance, duplicates, etc)
*/

// target is the number we want to get by adding two values in the array
// numbers is the array of sorted nums
function twoSum(numbers, target) { 
    // pointerနှစ်ခုcreateလုပ်
    let left = 0; // left pointer (index 0 ကစ)
    let right = numbers.length - 1; // right pointer (last index ကစ)
  
    while (left < right) {
    // calculate the sum of the numbers at the two pointers
      const sum = numbers[left] + numbers[right];
  
      if (sum === target) { // if the sum is equal to the target we want
        return [left + 1, right + 1]; // return the position of the two pointers
      } else if (sum < target) {
        left++; // move the left pointer rightward to a bigger number
      } else {
        right--; // move the right pointer leftward to a smaller number
      }
    }
  
    return []; 
  };


  const result = twoSum([2, 7, 11, 15], 9);
  console.log(result); // Output: [1, 2]
  
/*
    left = 0 (value = 2), right = 3 (value = 15)
    sum = 2 + 15 = 17 → too big → move right left
    left = 0 (value = 2), right = 2 (value = 11)
    sum = 2 + 11 = 13 → too big → move right left
    left = 0 (value = 2), right = 1 (value = 7)
    sum = 2 + 7 = 9 → return [1, 2]
*/