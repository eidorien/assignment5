var  scoreCount = -1;
var scoreTotal = -999;
var entry;

while (entry !=999) {
    entry = parseInt(prompt('Enter test score\nOr enter 999 to end entries'));
    scoreCount++;
    scoreTotal += entry;
}

console.log(scoreCount);
console.log(scoreTotal)

alert('Average score is: ' + scoreTotal / scoreCount);
