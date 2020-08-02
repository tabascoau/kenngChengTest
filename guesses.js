let result = {
  humanWin: 'humanWin',
  computerWin: 'computerWin',
  draw: 'draw'
}

const generateTarget = () => {
  getRandomInt(0,9);
}

const getRandomInt = (min, max) => {
   return Math.random() * (max - min) + min;
}

const compareGuesses = (humanGuess, computerGuess, secretTargetNum) => {
  let humanDiff = Math.abs(humanGuess - secretTargetNum);
  let computerDiff = Math.abs(computerGuess - secretTargetNum);
  if (humanDiff === computerDiff) {
    return result.draw;
  } else if (humanDiff > computerDiff) {
    return result.humanWin;
  } else {
    return result.computerWin;
  }
}

console.log('result: ' ,compareGuesses(4, getRandomInt(0,9), generateTarget()));