var mergeAlternately = function(word1, word2) {
    const timesToLoop = Math.max(word1.length, word2.length)
    let mergedString = ''

    for (let i=0; i<timesToLoop; i++){
        const char1 = word1[i] ?? ''
        const char2 = word2[i] ?? ''
        mergedString += char1
        mergedString += char2
    }

    return mergedString
};

mergeAlternately('abc', 'pqr')