// ! Pseudocode:
// 1. Buat function untuk looping masing-masing karakter dari word-user sama word-answer
// 2. Kalo hasilnya sama, maka dia akan balikin value 'true'
// 3. Kalo hasilnya beda, tapi dia masih ada di word-answer, maka dia akan balikin value 'included'
// 4. Kalo hasilnya beda dan dia tidak ada di word-answer, maka dia akan balikin value 'false'

// ? Code lama (masih ada logic yang butuh diupgrade)
// export default function wordCheckerNew(userWord, answerWord) {
//   let result = [];
//   let userWordSplit = userWord.split("");
//   let answerWordSplit = answerWord.split("");

//   for (let i = 0; i < answerWordSplit.length; i++) {
//     if (userWordSplit[i] === answerWordSplit[i]) {
//       result.push({ character: userWordSplit[i], status: "true" });
//     } else if (answerWord.includes(userWordSplit[i], 0)) {
//       result.push({ character: userWordSplit[i], status: "misplaced" });
//     } else {
//       result.push({ character: userWordSplit[i], status: "false" });
//     }
//   }

//   return result;
// }

// ? Code baru (udah diupgrade logicnya)
export default function wordChecker(userWord, answerWord) {
  let result = [];
  let userWordSplit = userWord.split("");
  let answerWordSplit = answerWord.split("");

  // Buat map untuk melacak jumlah kemunculan setiap huruf di answerWord
  let letterCount = {};
  for (let char of answerWordSplit) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // Step 1: Cek huruf yang benar dulu (correct)
  for (let i = 0; i < userWordSplit.length; i++) {
    if (userWordSplit[i] === answerWordSplit[i]) {
      result[i] = { character: userWordSplit[i], status: "correct" };
      letterCount[userWordSplit[i]]--; // Kurangi jumlah kemunculan huruf
    }
  }

  // Step 2: Cek huruf yang misplaced
  for (let i = 0; i < userWordSplit.length; i++) {
    if (!result[i]) {
      // Kalau belum ditandai sebagai correct
      if (letterCount[userWordSplit[i]] > 0) {
        result[i] = { character: userWordSplit[i], status: "misplaced" };
        letterCount[userWordSplit[i]]--; // Kurangi jumlah kemunculan yang tersedia
      } else {
        result[i] = { character: userWordSplit[i], status: "incorrect" };
      }
    }
  }

  return result;
}
