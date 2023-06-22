/*Из урока: typeof null - object!!! ошибка разработчиков js, функции не отдельный тип на самом деле, а объекты, 
чтоб преобразовать к строке + '', чтоб к числу + число, null == underfined будет true логический оператор ?? - проверка на underfined*/



/*console.log("Жили были дед и баба и была у них курочка");
let Surname = prompt("Как звали курочку?", "Жаба");
console.log(Surname)
if (Surname === "Жаба") {
    console.log("Фу какая гадость");
} else if (Surname === "Ряба") {
    console.log("Это уже банально");
} else {
    console.log("Ну хорошо!");
};

console.log("Снесла курочка");
let Egg = prompt("Что снесла?", "Весь код из домашнего задания");
console.log(Egg)
if (Egg === "Весь код из домашнего задания") {
    console.log("Какой кошмар!");
} else if (Egg === "Яичко" || Egg === "Яйцо") {
    console.log("Так ему и надо");
} else {
    console.log("Хорошая курочка, ничего не снесла");
};

console.log("Дед бил, бил...");
let Fight = prompt("И чо?", "Не разбил");
console.log(Fight)
if (Fight === "Не разбил") {
    console.log("А надо было больше стараться");
} else if (Fight === "Разбил") {
    console.log("Пожарил яичницу");
} else {
    console.log("Зачем?");
};
console.log("Дед плачет, баба плачет, а курочка кудахчет:")
let answer = prompt("Не плачь дед, не плачь баба, снесу я вам другое яичко, не золотое, а", "Чугунное");
console.log(answer)
if (answer != "Простое") {
    console.log("Выгодная курочка");
} else {
    console.log("Будет куриный суп");
};
alert("Вот и сказочке конец, а кто слушал - молодец!")*/

const btn = document.querySelector(".sender");
const addText = document.querySelector(".input");
const story = document.querySelector(".output");
const beginning = document.querySelector(".beginning");
const btnNext = document.querySelector(".next");
const reset = document.querySelector(".reset");
let beginningWords = ["Жили были дед и баба и была у них курочка", "Снесла курочка", "Дед бил, бил...", "Дед плачет, баба плачет, а курочка кудахчет:", "Снесу я вам другое яичко, не золотое, а"];
let answerWords = ["Жаба", "Весь код из домашнего задания", "И чо?", "Балбесы рукожопые", "Чугунное"]
let alternativeAnswers = ["ряба", "яичко", "не разбил", "простое"]
let commentWords = ["Фу какая гадость", "это уже банально", "...какой кошмар!", "Так ему и надо", "Не разбил", "А надо было больше стараться", "Пожарил яичницу", "Зачем?", "Будет куриный суп"];
let defaultWords = ["Ну хорошо!", "не может быть", "допустим", "это на вашей совести!", "Оригинально", "Пусть будет так"]
beginning.textContent = beginningWords[0]
let counter = 0
btn.addEventListener("click", function () {
    let rand = Math.floor(Math.random() * defaultWords.length);
    if (counter < beginningWords.length) {
        if (addText.value === answerWords[0]) {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value}? ${commentWords[0]} `
        }
        if (addText.value.toLowerCase() === "ряба") {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value} - ${commentWords[1]}`
        }
        if (addText.value.toLowerCase() === "яичко") {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value}! ${commentWords[3]}`
        }
        if (addText.value === answerWords[1]) {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value} ${commentWords[2]}`
        }
        if (addText.value === answerWords[2]) {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value} ${commentWords[4]}`
        }
        if (addText.value === answerWords[3]) {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value}, ни убавить, ни прибавить!`
        }
        if (addText.value === answerWords[4]) {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value}? Выгодная курочка`
        }
        if (addText.value.toLowerCase() === "не разбил") {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value}? ${commentWords[5]}`
        }
        if (addText.value != answerWords[counter] && addText.value.toLowerCase() != (alternativeAnswers[counter] || alternativeAnswers[counter + 1]) || "") {
            story.innerHTML += `<br>${beginningWords[counter]}<br>${addText.value} ... ${defaultWords[rand]}`
        }
    }
})

btnNext.addEventListener("click", function () {
    counter++
    if (counter < beginningWords.length) {
        beginning.innerHTML = beginningWords[counter];
        addText.value = answerWords[counter]
    }
    if (counter === beginningWords.length) {
        story.innerHTML += `<br>Вот и сказочке конец, а кто её писал - тому всего хорошего!`
    }

})

reset.addEventListener("click", function () {
    location.reload();
})

