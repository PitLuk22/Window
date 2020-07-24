import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let modalState = {
        type: 'tree'
    };

    changeModalState(modalState);

    modals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modals('.phone_link', '.popup[data-modal=""]', '.popup_close');
    modals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    modals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

    forms(modalState);

    const deadline = '2020-09-24';
    timer('#timer', deadline);

    images();
});