import FilterList from './FilterList';
import './styles/main.scss';

const equipment = document.getElementById("filters-equipment");
const brand = document.getElementById("filters-brand");
const section = document.getElementById("filters-section");
const axesdistance = document.getElementById("filters-axesdistance");
const heatingarea = document.getElementById("filters-heatingarea");
const color = document.getElementById("filters-color");

const filters = [equipment, brand, section, axesdistance, heatingarea, color];

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