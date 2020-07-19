export const renderDate = () => {
    let now, months, days, hour, day, month, year, minutes;
    now = new Date();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();
    year = now.getFullYear();
    day = now.getDate();
    hour = now.getHours();
    minutes = now.getMinutes();
    document.querySelector('.date').textContent = 'Last updated: ' + months[month] + ' ' + day + ', ' + year + ', ' + hour + ':' + minutes + ' GMT';
};
export const renderLoader = () => {
    const loader = `
    <div class="loader">
    <div class="loadingio-spinner-spinner-32a50hsj61w"><div class="ldio-6glrdvct5ws">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div><div>
    `;
    document.querySelector('.aboutWorld').insertAdjacentHTML("beforeend", loader);
};
export const clearLoader = () => {
    const loader = document.querySelector(`.loader`);
    if (loader) loader.remove();
};
export const renderBurger = () => {
    document.querySelector('.burger').addEventListener('click', function () {
        var y = document.querySelector('.main_nav');
        y.classList.toggle('main_move');
        document.querySelector('body').style.overflowY='hidden';
    });
    document.querySelector('.btn_close').addEventListener('click', function () {
        var y = document.querySelector('.main_nav');
        y.classList.toggle('main_move');
        document.querySelector('body').style.overflowY='visible';    
    });
}
export const close_burger = () => {
    var y = document.querySelector('.main_nav');
    document.querySelector('body').style.overflowY='visible';
    y.classList.toggle('main_move');
    
}