var search = function(nums, target) {
    let front = 0
    let back = nums.length - 1

    while (front <= back){ // <= because we need to check middle as the back
        const middle = Math.floor((front + back) / 2)
        if (nums[middle] === target) {return middle}
        if (nums[middle] < target) {front = middle + 1}
        else {back = middle - 1} // -1 because we know that middle isn't the correct value so we don't have to include it
    }

    return -1
};