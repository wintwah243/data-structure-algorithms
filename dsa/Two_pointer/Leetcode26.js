/*
    Leetcode problem 26
    Two Pointers
*/
var removeDuplicates = function(nums) {

    let left = 0; // left pointer

    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== nums[right]) { // if there's a duplicate, do nth
            left++;
            nums[left] = nums[right]; 
        }
    }

    return left + 1; 
};

let result = removeDuplicates([1, 1, 2, 2, 3, 4]);
console.log(result);

/*
    First looping - there is a duplicate so do nth [1, 1, 2, 2, 3, 4] (left-0, right-1)
    Second looping - 1 !== 2 so [1,2,2,2,3,4] (left-1, right-2)
    Third looping - 2 !== 2 so duplicate do nth [1,2,2,2,3,4] (left-1, right-3)
    Fourth looping - 2 !== 3 so [1,2,3,2,3,4] (left-2, right-4)
    Fifth looping - 3 !== 4 so [1,2,3,4,3,4] (left-3, right-5)

    return 3+1 = 4 so the first 4 elements are unique with no duplicates.
*/

