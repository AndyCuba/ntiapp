class MainFilter {

    filtersBar = document.getElementsByClassName('home__main-filters')[0];
    isOpened = true;
    
    getIsOpened() {
        return this.isOpened;
    };

    openList() {
        this.filtersBar.classList.add('show_filters');
        this.isOpened = true;
    };

    hideList() {
        this.filtersBar.classList.remove('show_filters');
        this.isOpened = false;
    };
};

export default MainFilter;