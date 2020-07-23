import noLettersInInputs from './noLetters';
import {
    closeModal
} from './modals';

const forms = (state) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    const message = {
        loading: 'assets/img/loader.svg',
        thanks: 'Спасибо, скоро мы с вами свяжемся!',
        fail: 'Что-то пошло не так'
    };

    // Только цифры в инпутах
    noLettersInInputs('input[name="user_phone"]');


    // Отправляем данные на сервер
    const postData = async (url, data, form) => {
        const loadingStatusMessage = document.createElement('img');
        loadingStatusMessage.classList.add('status_loading');
        loadingStatusMessage.src = message.loading;
        loadingStatusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            width: 60px;
            height: 30px;
        `;
        form.appendChild(loadingStatusMessage);

        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    // Очищаем все инпуты
    const clearInputs = () => {
        inputs.forEach(elem => {
            elem.value = '';
        });
    };

    // Действия после нажатия на кпопку в форме
    form.forEach(elem => {
        elem.addEventListener('submit', (event) => {

            event.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            elem.appendChild(statusMessage);

            const formData = new FormData(elem);
            if (elem.dataset.calc === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }


            postData('assets/server.php', formData, elem)
                .then(res => {
                    console.log(res);
                    document.querySelector('.status_loading').remove();
                    statusMessage.textContent = message.thanks;
                })
                .catch(() => {
                    statusMessage.textContent = message.fail;
                })
                .finally(() => {
                    clearInputs();
                    // elem.reset();  // очистка определнной формы
                    setTimeout(() => {
                        statusMessage.remove();
                        //берем класс открытого модального окна
                        let selector = elem.closest('div[data-modal]').getAttribute('class').replace(/^/, '.');
                        closeModal(selector);
                    }, 3000);

                });

        });
    });
};

export default forms;