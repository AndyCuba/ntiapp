class FilterList {

    constructor(filterList) {
        this.filterList = filterList;
        this.isOpened = true;
    };
    
    getIsOpened() {
        return this.isOpened;
    };

    openList() {
        this.filterList.nextElementSibling.classList.remove('hidden');
        this.filterList.classList.remove('turned-over');
        this.isOpened = true;
    };

    hideList() {
        this.filterList.nextElementSibling.classList.add('hidden');
        this.filterList.classList.add('turned-over');
        this.isOpened = false;
    };
};

export default FilterList;