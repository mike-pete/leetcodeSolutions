/**
 * @param {string} senate
 * @return {string}
 */

var predictPartyVictory = function (senate) {
    senate = senate.split('')
    const survivors = {R:0, D:0, 0:0}
	const pendingKills = {R:0, D:0}

    let i = 0
	while (true) {
		vote(i, senate, pendingKills)
        survivors[senate[i]] = survivors[senate[i]] + 1
        i++
        if (i === senate.length){
            i = 0
            if (survivors.D === 0){
                return "Radiant"
            }
            if (survivors.R === 0){
                return "Dire"
            }
            survivors.R = 0
            survivors.D = 0
        }
	}
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

console.log(predictPartyVictory('RDD'))
