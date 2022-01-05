import FilterList from './FilterList';
import MainFilter from './MainFilter';
import './priceSlider';
import './styles/main.scss';

const equipment = document.getElementById('filters-equipment');
const brand = document.getElementById('filters-brand');
const section = document.getElementById('filters-section');
const axesdistance = document.getElementById('filters-axesdistance');
const heatingarea = document.getElementById('filters-heatingarea');
const color = document.getElementById('filters-color');
const filtersButton = document.getElementById('main-filters');
const filtersApplyButton = document.getElementById('filter-apply');
const filtersResetButton = document.getElementById('filter-reset');

const filters = [equipment, brand, section, axesdistance, heatingarea, color];
const filterSidebarButtons = [filtersButton, filtersApplyButton];

function resetInputs() {
    const inputs = document.getElementsByClassName('home__main-filters')[0].getElementsByTagName('INPUT');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
};


filters.forEach(filter => {
    const filterList = new FilterList(filter);

    filter.addEventListener('click', () => {
        const isOpened = filterList.getIsOpened();

        if (isOpened) {
            filterList.hideList();
        } else if (!isOpened) {
            filterList.openList();
        };
    });

});

const mainFilter = new MainFilter;

filterSidebarButtons.forEach(button => {

    button.addEventListener('click', () => {
        const isOpened = mainFilter.getIsOpened();
    
        if (isOpened) {
            mainFilter.hideList();
        } else if (!isOpened) {
            mainFilter.openList();
        };
    });

});

filtersResetButton.addEventListener('click', resetInputs);