let btnNext = document.querySelector(".btnNext");
// Берём слайды
let slider = document.querySelectorAll(".slider");
// Объявляем переменную i 
let i = 0;

// Объявляем событие нажатия на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slider.length) {
        //удаляю класс none первому слайду
        slider[i - 1].classList.remove("none");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс none следующему слайду
        slider[i].classList.add("none");
    } else { // Иначе
        // Удаляем класс none предыдущему слайду
        slider[i - 1].classList.remove("none");
        // Добавляем класс none следующему слайду
        slider[i].classList.add("none");
    }
})



