/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const returnArray = []
	let product = 1

    // this traverses the array backwards and stores the current running product
	for (let i = nums.length - 2; i >= 0; i--) {
		const num = nums[i + 1]
		product *= num
		returnArray[i] = product
	}

	returnArray.push(1)
	product = 1

    // this traverses the new array and stores the result of nums[i-1] * running product
	return Object.entries(returnArray).map(([i, num]) => {
        const trailingNum = nums[i - 1] ?? 1
        product *= trailingNum
        return product * num
	})
}

console.log(productExceptSelf([-1,1,0,-3,3]))
