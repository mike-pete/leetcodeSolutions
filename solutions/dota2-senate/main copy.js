/**
 * @param {string} senate
 * @return {string}
 */

var predictPartyVictory = function (senate) {
    senate = senate.split('')
	const pendingKills = {
		R: 0, // how many future Rs will die
		D: 0, // how many future Ds will die
	}

	for (let i = 0; pendingKills.D < senate.length && pendingKills.R < senate.length; i++) {
		vote(i, senate, pendingKills)
        if (i === senate.length -1){
            i = -1
        }
	}

	return pendingKills.D === senate.length ? "Radiant" : "Dire"
}

const vote = (i, senate, pendingKills) => {
	const char = senate[i]
    const antiChar = char === 'R' ? 'D' : 'R'

	if (char != 0) {
		if (pendingKills[char] > 0) {
			pendingKills[char] = pendingKills[char] - 1
			senate[i] = '0'
		} else {
			pendingKills[antiChar] = pendingKills[antiChar] + 1
		}
	}
}

console.log(predictPartyVictory('RD'))
