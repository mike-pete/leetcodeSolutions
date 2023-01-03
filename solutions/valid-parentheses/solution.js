/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
	const pairs = {
		'(': ')',
		'{': '}',
		'[': ']',
	}

	if (s.length % 2 !== 0) {
		return false
	}

	const openingChars = Object.keys(pairs)
	const thisIsAnOpeningChar = (char) => openingChars.includes(char)

	let listOfUnclosedOpeningChars = []

	for (char of s.split('')) {
		if (thisIsAnOpeningChar(char)) {
			listOfUnclosedOpeningChars.push(char)
		} else {
			const latestUnclosedOpeningChar = listOfUnclosedOpeningChars.pop()
			if (pairs[latestUnclosedOpeningChar] !== char) {
				return false
			}
		}
	}

	return listOfUnclosedOpeningChars.length === 0
}

console.log(isValid('('), 'f')
console.log(isValid('()'), 't')
console.log(isValid('()[]{}'), 't')
console.log(isValid('(]'), 'f')
console.log(isValid('{{}}{[]}'), 't')
