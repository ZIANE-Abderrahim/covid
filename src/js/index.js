import Table from './modes/table';
import Search from './modes/search';
import Mocharts from './modes/moCharts';
import GlobalCHarts from './modes/chart';
import * as tableViews from './views/tableViews';
import * as searchViews from './views/searchViews';
import * as CHarts from './views/chartViews';
import * as base from './views/base';

import * as mochartViews from './views/mChartsViews';
function compare(a, b) {
  const bandA = a.todayCases;
  const bandB = b.todayCases;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
}

const state = {};
const controlTable = async () => {

  state.table = new Table();
  await state.table.getResults();
  //tableViews.renderTable(state.table.result,state.table.global)
  tableViews.renderTable(state.table.result.sort(compare),state.table.global);
  searchViews.rowcolor();
  tableViews.colcell();
  console.log(state.table.result);
};
export const controlSearch = async () => {
  const x = searchViews.getInput();
  state.search = new Search(x);
  tableViews.clearResults();
  await state.search.getResults();

  if (x) {
    searchViews.renderResults(state.search.result);
    searchViews.rowcolor();
    searchViews.cellcolor();
    

  } else {
    document.querySelector('tbody').innerHTML = '';
    tableViews.renderResults(state.table.result);
    tableViews.renderGlobalRes(state.table.global);
    searchViews.rowcolor();
    tableViews.colcell();

  }

};
const controlglCharts = async () => {
  state.globalcharts = new GlobalCHarts();
  base.renderLoader();
  await state.globalcharts.getResults();
  base.clearLoader();
  CHarts.renderGlobalCharts(state.globalcharts.global, state.globalcharts.deaths, state.globalcharts.continent);
};
const controlmoCharts = async () => {
  document.querySelector('.aboutWorld').innerHTML = '';
  document.querySelector('.tab_section').innerHTML = '';
  
  state.mocharts = new Mocharts();
  base.renderLoader();
  await state.mocharts.getResults();
  base.clearLoader();
  mochartViews.renderMoCharts(state.mocharts.daily, state.mocharts.global);
};
document.querySelector('.btn_mstats').addEventListener('click', ()=>{
  base.close_burger();
  controlmoCharts();
});
document.querySelector('.btn_worldstt').addEventListener('click',()=>{
  base.close_burger();
  document.querySelector('.aboutWorld').innerHTML = '';
  controlglCharts();
  controlTable();
} );
base.renderDate();
base.renderBurger();
controlglCharts();
controlTable();
