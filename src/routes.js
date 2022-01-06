import FilterList from './FilterList';
import MainFilter from './MainFilter';
import createSlider from './priceSlider';
import heatingMarkup from './heatingMarkup';

const heading = document.getElementById('main-heading');
const mainPageLink = document.getElementById('main-page');
const equipmentPageLink = document.getElementById('equipment-page');
const content = document.getElementsByClassName('home__main-content')[0];

function checkHash() {

    const hash = location.hash.slice(1);

    switch (hash) {
        case 'heating-equipment':
            showHeatingEquipment();
            break;
    
        default:
            showMainPage();
            break;
    };
};

function handleClick(e) {
    e.preventDefault();
    const href = e.target.href;
    const hashIndex = href.indexOf('#');

    if (hashIndex !== -1) { 
        location.hash = href.slice(hashIndex);
    } else {
        history.replaceState('', '#', '/');
    };

    checkHash();
};

function showHeatingEquipment() {
    try {
        mainPageLink.classList.remove('active-link');
        equipmentPageLink.classList.add('active-link');

        heading.innerText = 'Отопительное оборудование';

        content.innerHTML = heatingMarkup;
        addEquipmentListeners();
        createSlider();
    } catch (error) {
        console.log(error)
    };  
};

function showMainPage() {
    mainPageLink.classList.add('active-link');
    equipmentPageLink.classList.remove('active-link');

    heading.innerText = 'Главная';
    content.innerHTML = '';
};

function addEquipmentListeners() {
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
};

mainPageLink.addEventListener('click', handleClick);
equipmentPageLink.addEventListener('click', handleClick);

window.addEventListener('load', checkHash);