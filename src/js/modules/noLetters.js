const noLettersInInputs = (selector) => {
    const inputNumber = document.querySelectorAll(selector);

    inputNumber.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g, '');
        });
    });
};
export default noLettersInInputs;