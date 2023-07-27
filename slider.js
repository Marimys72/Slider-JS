let position = 0; //начальная позиция, которую будем переопределять, когда будем скроллить
const slidesToShow = 3; //отвечает за то, сколько элементов показывать
const slidesToScroll = 2;//отвечает за то, сколько элементов проскроллить
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');//коллекция, в которой все слайды
const itemsCount = items.length;//количество слайдов
const itemWidth = container.clientWidth / slidesToShow; //ширина каждого элемента
const movePosition = slidesToScroll * itemWidth;//ширина, на которую нужно проскроллить

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
}); //каждому слайду присваиваем ширину в зависимости от количества слайдов

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) /itemWidth; //количество оставшихся элементов

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth; //количество оставшихся элементов

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth; //если количество оставшихся элементов больше или равно видимых, то...
    
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;//функция для сдвига трека по оси X
};

const checkBtns = () => {
    btnPrev.disabled = position === 0; //кнопка отключается, если начальное положение равно 0
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

