import noLettersInInputs from './noLetters';

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowTemp = document.querySelectorAll('.checkbox');

    noLettersInInputs('#width');
    noLettersInInputs('#height');

    function bindModalState(event, item, prop) {
        item.forEach((elem, index) => {
            elem.addEventListener(event, function () {
                switch (elem.nodeName) {
                    case 'SPAN':
                        state[prop] = index;
                        break;
                    case 'INPUT':
                        if (elem.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";

                            item.forEach(box => {
                                box.checked = false;
                            });
                            elem.checked = true;

                        } else {
                            state[prop] = elem.value;
                        }
                        break;
                    case "SELECT": {
                        state[prop] = elem.value;
                        break;
                    }
                }
                console.log(state);
                if (state.form !== undefined && state.width !== undefined && state.height !== undefined) {
                    document.querySelector('.popup_calc_button').disabled = false;
                }
                if (state.type !== undefined && state.temp !== undefined) {
                    document.querySelector('.popup_calc_profile_button').disabled = false;
                }
            });
        });



    }
    bindModalState('click', windowForm, 'form');
    bindModalState('input', windowWidth, 'width');
    bindModalState('input', windowHeight, 'height');
    bindModalState('change', windowType, 'type');
    bindModalState('change', windowTemp, 'temp');
};

export default changeModalState;