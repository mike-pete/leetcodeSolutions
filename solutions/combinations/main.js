var combine = function (n, k) {
	const firstVal = []

	for (let i = 1; i <= k; i++) {
		firstVal.push(i)
	}

    
	const list = [firstVal]
    console.log('f', firstVal, list)
    
    let prevVal = getNext(firstVal, n)
    console.log('prev, first', prevVal, firstVal)

	while (prevVal){
	    list.push(prevVal)
	    prevVal = getNext(prevVal, n)
	}

    console.log('list', list, firstVal)

    return list
}

const getNext = (prev, end) => {
	for (let i = prev.length - 1; i >= 0; i--) {
		const maxForThisIndex = end - (prev.length - 1 - i)
		const val = prev[i]

		const next = prev

        console.log('max', maxForThisIndex)
		if (val !== maxForThisIndex) {
			next[i] = val + 1

			for (i = i + 1; i < prev.length; i++) {
				next[i] = next[i - 1] + 1
			}

			return next
		}
	}
}







// console.log(combine(6, 3).length)
console.log(combine(2, 1))




// console.log([1], getNext([1], 2), [2])






// console.log('last', lastVal)

// console.log([1, 2, 3], getNext([1, 2, 3], k, n), [1, 2, 4])
// console.log([1, 4, 6], getNext([1, 4, 6], k, n), [1, 5, 6])
// console.log([1, 5, 6], getNext([1, 5, 6], k, n), [2, 3, 4])
// console.log([2, 5, 6], getNext([2, 5, 6], k, n), [3, 4, 5])
// console.log([3, 5, 6], getNext([3, 5, 6], k, n), [4, 5, 6])