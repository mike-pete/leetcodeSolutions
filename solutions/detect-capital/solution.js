// all caps
// first letter
// no caps

/**
 * @param {string} word
 * @return {boolean}
 */


var detectCapitalUse = function(word) {

    const isCap = (letter) => letter === letter.toUpperCase()

    let prevIsCap = isCap(word[0])

    for (const [index, letter] of Object.entries(word)){        
        const letterIsCap = isCap(letter)

        if ((!prevIsCap && letterIsCap) || (prevIsCap && !letterIsCap && index > 1)){
            return false
        }

        prevIsCap = letterIsCap
    }

    return true
};



const tests = ['USA', 'Usa', 'usa', 'uSa', 'USa', 'usA']

tests.map(word => console.log(word, detectCapitalUse(word)))