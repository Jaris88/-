
let words = ["голова", "нос", "губы", "картридж", "нож", "новость"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArr = [];
for ( let i = 0; i < word.length; i++) {
    answerArr[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArr.join(" "));
let guess = prompt("Угадайте букву или нажмите ОТМЕНА для выхода из игры!");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
    alert("Введите только 1 букву!");
    } else {
        for ( let j = 0; j < word.length; j++) {
            if ( word[j] === guess) {
                answerArr[j] = guess;
                remainingLetters--;
            }
    }
}
}

alert(answerArr.join(" "));
alert("Отлично, вы угадали слово - " + word);