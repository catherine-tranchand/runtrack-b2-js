function myCountChar(word, letterToCount) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letterToCount) {
            count++;
        }
    }

    return count;
}

let word = "Metamorphisis";
let letterToCount = "r";
let result = myCountChar(word, letterToCount);

console.log('Le caractère: ' + letterToCount +  ' dans le mot : ' + word + ' apparaît ' + result + ' fois dans la chaîne.');



