const timer = (id, deadline) => {

    const getTimeRemaining = (endtime) => {

        const diff = new Date(endtime) - new Date();
        const sec = Math.round((diff / 1000) % 60),
            min = Math.round((diff / 1000 / 60) % 60),
            hour = Math.round((diff / 1000 / 60 / 60) % 24),
            day = Math.round((diff / 1000 / 60 / 60 / 24));

        return {
            'total': diff,
            'days': day,
            'hours': hour,
            'minutes': min,
            'seconds': sec
        };
    };

    const addZero = (num) => {
        let res = num <= 9 ? num = `0${num}` : num;
        return res;
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getTimeRemaining(endtime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }

        }
    };

    setClock(id, deadline);

};
export default timer;