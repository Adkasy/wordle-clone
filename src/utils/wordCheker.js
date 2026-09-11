export default function wordChecker(userWord, answerWord) {
  let result = [];
  let userWordSplit = userWord.split("");
  let answerWordSplit = answerWord.split("");

  let letterCount = {};
  for (let char of answerWordSplit) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  for (let i = 0; i < userWordSplit.length; i++) {
    if (userWordSplit[i] === answerWordSplit[i]) {
      result[i] = { character: userWordSplit[i], status: "correct" };
      letterCount[userWordSplit[i]]--;
    }
  }

  for (let i = 0; i < userWordSplit.length; i++) {
    if (!result[i]) {
      if (letterCount[userWordSplit[i]] > 0) {
        result[i] = { character: userWordSplit[i], status: "misplaced" };
        letterCount[userWordSplit[i]]--;
      } else {
        result[i] = { character: userWordSplit[i], status: "incorrect" };
      }
    }
  }

  return result;
}
