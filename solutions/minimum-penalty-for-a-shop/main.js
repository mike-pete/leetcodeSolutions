var bestClosingTime = function (customers) {
	let penalty = 0

	for (let i = 0; i < customers.length; i += 1) {
		penalty += customers[i] === 'N'
	}

	let lowest = penalty
	let lowestIndex = customers.length

	for (let i = customers.length - 1; i >= 0; i -= 1) {
		if (customers[i] === 'Y') {
			penalty += 1
		} else {
			penalty -= 1
		}
        
		if (penalty <= lowest) {
			lowest = penalty
			lowestIndex = i
		}
	}

	return lowestIndex
}

bestClosingTime('YYYY')
