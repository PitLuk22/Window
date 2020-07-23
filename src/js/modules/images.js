const images = () => {
    const workSection = document.querySelector('.works'),
        overlay = document.createElement('div'),
        bigImg = document.createElement('img');

    overlay.classList.add('popup');

    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.display = 'none';

    bigImg.style.cssText = `
        max-width: 80%;
        max-height: 85%;
    `;

    workSection.append(overlay);
    overlay.append(bigImg);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();
        //открытие большого изображения
        if (event.target && event.target.classList.contains('preview')) {
            const path = event.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            overlay.style.display = 'flex';
            overlay.classList.add('fade_animate_img');
            document.body.style.overflow = 'hidden';
        }
        //закрытие при клике на подложку
        if (event.target && event.target.classList.contains('popup')) {
            overlay.style.display = 'none';
            overlay.classList.remove('fade_animate_img');
            document.body.style.overflow = '';
        }
    });

};
export default images;