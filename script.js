prompt("Как тебя зовут?");
alert("Шучу. Мне плевать)");
    alert("Короче, Меченый, я тебя спас и в благородство играть не буду: угадаешь для меня слово – и мы в расчете. " +
    "Заодно посмотрим, как быстро у тебя башка после коронавируса прояснится. А по твоей теме постараюсь разузнать. " +
    "Хрен его знает, на кой ляд тебе этот сайт скинули, но я в чужие дела не лезу, и историю браузера не смотрю...")

let words = ["голова","инкубатор","губы","новость",
    "носки","обувь","веселица","скальпель",
    "яблоко","орфография","логика","ножны",
    "картина","уксус","синхрофазотрон"];

let word = words[Math.floor(Math.random() * words.length)];

let answerArr = [];
    for ( let i = 0; i < word.length; i++) {
        answerArr[i] = "_";
    }
let remainingLetters = word.length;
let newLetters = remainingLetters;

let count = 5;

while (remainingLetters > 0 && count !== 0) {
    alert("Вот сколько тебе осталось жизней:  " + count + "\n" + answerArr.join(" "));
    let guess = prompt("Угадывай букву или жми ОТМЕНА для самоуничтожения");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Слышь, давай по одной...");
        } else {
            guess = guess.toLowerCase();

            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess && answerArr[j] === "_") {
                    answerArr[j] = guess;
                    remainingLetters--;
                }
            }
        }
        if (remainingLetters === newLetters) {
            count--;
        }
    newLetters = remainingLetters;
}
if (count === 0) {
    alert("Ну вот и все, пока...")
}else if(remainingLetters === 0){
    alert("Хорошая работа Меченый, бери хабар и уе... ходи от сюда..." + "А кстати слово было " + word + "!");
} else {
    alert("Ну тут даже я хз... ");
}
