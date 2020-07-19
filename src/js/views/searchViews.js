export const getInput = () => document.querySelector('.search__field').value;
export const clearInput = () => document.querySelector('.search__field').value = '';
import {formatNumber} from './tableViews';
const renderResPerCountry = (e) => {
    let i = 1;
    const html = `
    <tr class="item clearfix">
    <td>${i}</td>
    <td><img class="flag" src="${e.countryInfo.flag}"> ${e.country}</td>
    <td>${e.todayCases==0 ? formatNumber(e.todayCases): '+'+formatNumber(e.todayCases)}</td>
    <td>${e.todayRecovered==0 ? formatNumber(e.todayRecovered): '+'+formatNumber(e.todayRecovered)}</td>
    
    <td>${e.todayDeaths==0 ? formatNumber(e.todayDeaths): '+'+formatNumber(e.todayDeaths)}</td>
    <td>${formatNumber(e.active)}</td>
    <td>${formatNumber(e.cases)}</td>
    <td>${formatNumber(e.deaths)}</td>
    <td>${formatNumber(e.recovered)}</td>    
    </tr>`;
    document.querySelector('tbody').insertAdjacentHTML("beforeend", html);
}

export const renderResults = (country) => renderResPerCountry(country);

export const cellcolor = () => {
    let arrayLignes = document.querySelector("tbody").rows;
    let longueur = arrayLignes.length;
    let i = 0;

    while (i <= longueur - 1) {

        if (arrayLignes[i].cells[3].textContent != '0') {
            arrayLignes[i].cells[3].style.backgroundColor = 'rgb(255, 32, 32)';
            arrayLignes[i].cells[3].style.color = "#fff";

        }
        if (arrayLignes[i].cells[1].textContent != '0') {
            arrayLignes[i].cells[1].style.backgroundColor = '#FFEEAA';
        }
        if(arrayLignes[i].cells[2].textContent!='0'){
            arrayLignes[i].cells[2].style.backgroundColor ='#03C1A7';
            arrayLignes[i].cells[2].style.color="#fff";
        }
        i++;

    };
}
export const rowcolor = () => {
    let arrayLignes = document.querySelector("tbody").rows;
    let longueur = arrayLignes.length;
    let i = 0;

    while (i < longueur - 1) {
        if (i % 2 == 0) {
            arrayLignes[i].style.backgroundColor = "#fff";
        } else {
            arrayLignes[i].style.backgroundColor = "#f2f2f2";
        }

        i++;

    }

}

