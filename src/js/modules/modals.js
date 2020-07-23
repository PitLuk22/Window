function openModal(modalSelector, scroll, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    modal.style.marginRight = `${scroll}px`;
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
    modal.style.marginRight = `0px`;
}

function modals(triggerSelector, modalSelector, crossSelector, closeClickOverlay = true) {

    const triggerModal = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const cross = document.querySelector(crossSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    function closeAll() {
        windows.forEach(elem => {
            elem.style.display = 'none';
        });
    }

    triggerModal.forEach(elem => {
        //делаем неактивные кнопки при формиравании modalState
        if (elem.classList.contains('popup_calc_button') || elem.classList.contains('popup_calc_profile_button')) {
            elem.disabled = true;
        }

        elem.addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
                closeAll();
                openModal(modalSelector, scroll);
            }
        });
    });

    cross.addEventListener('click', () => {
        closeAll();
        closeModal(modalSelector);
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal && closeClickOverlay) {
            closeAll();
            closeModal(modalSelector);
        }
    });

    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27 && modal.classList.contains('show')) {
            closeAll();
            closeModal(modalSelector);
        }
    });

    // const modalTimerId = setTimeout(() => openModal('.popup', scroll, modalTimerId), 60000);

    // Расчет ширины скролла браузера
    function calcScroll() {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        const scroll = div.offsetWidth - div.clientWidth;
        div.remove();

        return scroll;
    }
}


export default modals;
export {
    closeModal
};