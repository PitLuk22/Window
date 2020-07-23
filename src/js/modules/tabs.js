function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {

    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(elem => {
            elem.style.display = 'none';
            elem.classList.remove('fade_animate');

        });
        tabs.forEach(elem => elem.classList.remove(activeClass));
    }

    function showTabContent(index = 0) {
        content[index].style.display = display;
        tabs[index].classList.add(activeClass);
        content[index].classList.add('fade_animate');
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', function (event) {
        const target = event.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tabs.forEach((elem, index) => {
                if (target == elem || target.parentNode == elem) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });


    //Итак, важная инфомация!!! В данном проекте есть табы, которые представляют собой обертку, внутри которой есть
    // еще картинка и текст (то есть два дочерних элемента). Поэтому нам необходимо сделать проверку, если мы нажимаем
    // на картинку или текст внутри таба, так как у них нет селектора главного таба (обертки). При нажатии на картинку
    // или текст, мы спрашиваем "у твоего родителя есть такой класс", если да, ты мы выполняем действие!



}
export default tabs;