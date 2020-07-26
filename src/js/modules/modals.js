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

function modals(triggerSelector, modalSelector, crossSelector, modalTimerId, closeClickOverlay = true) {

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
            elem.style.background = 'grey';
            elem.style.boxShadow = '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
            elem.style.border = '1px solid grey';
        }

        elem.addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
                closeAll();
                openModal(modalSelector, scroll, modalTimerId);
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


}

export default modals;
export {
    openModal,
    closeModal,
    calcScroll
};