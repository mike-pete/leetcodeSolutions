var solution = function (isBadVersion) {
	return (end) => {
		let start = 0
		let middle, middleIsBad

		while (start <= end) {
			middle = Math.floor((start + end) / 2)
			middleIsBad = isBadVersion(middle)

			if (!middleIsBad) {
				start = middle + 1
			} else {
				end = middle - 1
			}
		}

		return start
	}
}

const isBadVersion = (bad) => (guess) => {
	return guess > bad
}

solution(isBadVersion(4))(5)
