import * as control from '../index'
export const clearResults = () => document.querySelector('tbody').innerHTML = '';
export const renderTable = (result,global) => {
    const html=`<div class="row">
    <h3>Reported Cases and Deaths by Country</h3>
  </div>
  <form class="search">
    <label for="searchInput">
      <ion-icon name="search-outline"></ion-icon>
    </label>
    <input type="text" list="countries" name="searchInput" class="search__field"
      placeholder="Search over 248 countries ...">
    <datalist id="countries">

    </datalist>
    
  </form>
    
    <div class="tablee">
  <table class="tab" id="maintable">
    <thead>
      <tr>
        <th>#</th>
        <th>Country</th>
        <th>New confirmed</th>
        <th>New recovered</th>
        <th>New deaths</th>
        <th>Active cases</th>
        <th>Total confirmed</th>
        <th>Total deaths</th>
        <th>Total recovered</th>
      </tr>
    </thead>
    <tbody class=".content"></tbody>


  </table>
  </div>`;
  
  document.querySelector('.tab_section').insertAdjacentHTML("beforeend",html);
  rendercountries(result)
  renderResults(result);
  renderGlobalRes(global);
  
  document.querySelector('.search__field').addEventListener('change', e => {
    e.preventDefault();
    control.controlSearch();
  });
}
export const renderResPerCountry = (i,e) => {
    //let i = 1;
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
export const renderGlobalRes = (e) => {
    //let i = 1;
    const html = `
    <tr class="item clearfix">
    
    <td colspan="2">Total</td>
    <td>${e.todayCases==0 ? formatNumber(e.todayCases): '+'+formatNumber(e.todayCases)}</td>
    <td>${e.todayRecovered==0 ? formatNumber(e.todayRecovered): '+'+formatNumber(e.todayRecovered)}</td>
    <td>${e.todayDeaths==0 ? formatNumber(e.todayDeaths): '+'+formatNumber(e.todayDeaths)}</td>
    <td>${formatNumber(e.active)}</td>
    <td>${formatNumber(e.cases)}</td>
    <td>${formatNumber(e.deaths)}</td>
    <td>${formatNumber(e.recovered)}</td>    
    </tr>`;

    document.querySelector('tbody').insertAdjacentHTML("beforeend", html);
    let arrayLignes = document.querySelector("tbody").rows;
    let longueur = arrayLignes.length;
    arrayLignes[longueur - 1].style.backgroundColor = "#c9c7c7";
    arrayLignes[longueur - 1].style.fontSize = '18px';
}
const renderCountry = (e) => {

    const html = `<option value="${e}">`;

    document.getElementById('countries').insertAdjacentHTML("beforeend", html);



}
export const renderResults = (countries) => {
    let i=1;
    countries.forEach(element => {
        renderResPerCountry(i,element);
        i++;
    });

}
export const rendercountries = (countries) => {
    countries.forEach(element => {
        renderCountry(element.country);
    });

}

export const colcell=()=>{
    let arrayLignes = document.querySelector("tbody").rows; 
    
    let longueur = arrayLignes.length;
    let i=0; 
    
    while(i<longueur-1)
    {
        
        if(arrayLignes[i].cells[4].textContent!='0'){
            arrayLignes[i].cells[4].style.backgroundColor ='rgb(255, 32, 32)';
            arrayLignes[i].cells[4].style.color="#fff";
            
        }
        if(arrayLignes[i].cells[2].textContent!='0'){
            arrayLignes[i].cells[2].style.backgroundColor ='#FFEEAA';
        }
        if(arrayLignes[i].cells[3].textContent!='0'){
          arrayLignes[i].cells[3].style.backgroundColor ='#03C1A7';
          arrayLignes[i].cells[3].style.color="#fff";
      }
        i++;   
        
    }
    ;
}
export const formatNumber = function (num) {
    var numSplit, int, dec, type;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 6) {
        int = int.substr(0, int.length - 6) + ',' + int.substr(int.length - 6, 3) + ',' + int.substr(int.length - 3, 3);
    } else if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }




    return int;

};