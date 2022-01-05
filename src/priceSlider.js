window.onload = () => {
    const priceSlider = document.getElementById('price-slider');
    const firstThumb = document.getElementById('first-thumb');
    const secondThumb = document.getElementById('second-thumb');
    const sliderFiller = document.getElementById('slider-filler');

    const sliderOffsetWidth = priceSlider.offsetWidth;
    let firstThumbLeft = firstThumb.offsetLeft;
    let secondThumbLeft = secondThumb.offsetLeft;

    let startX;

    function handleFirstThumbMove(e) {
        const minPos = 0;

        // Take 5 px for thumbs do not overlap each other
        const maxPos = secondThumbLeft - 5;
        const offset = firstThumb.offsetLeft;
        
        if (offset <= maxPos && offset >= minPos) {

            // add 2 to hide filler edge behind thumb
            sliderFiller.style.left = firstThumbLeft + e.clientX - startX + 2 + 'px';
            sliderFiller.style.width = secondThumbLeft - offset + 'px';
            firstThumb.style.left = firstThumbLeft + e.clientX - startX + 'px';

        } else if (offset > maxPos) {

            firstThumb.style.left = maxPos + 'px';
            mouseUp();

        } else if (offset < minPos) {

            firstThumb.style.left = minPos + 'px';
            mouseUp();

        };
    };

    function handleSecondThumbMove(e) {
        // Add 5 px for thumbs do not overlap each other
        const minPos = firstThumbLeft + 5;
        const maxPos = sliderOffsetWidth;
        const offset = secondThumb.offsetLeft;
        
        if (offset <= maxPos && offset >= minPos) {

            // add 2 to hide filler edge behind thumb
            sliderFiller.style.width = secondThumbLeft + e.clientX - startX - sliderFiller.offsetLeft + 2 + 'px';
            secondThumb.style.left = secondThumbLeft + e.clientX - startX + 'px';

        } else if (offset > maxPos) {

            secondThumb.style.left = maxPos + 'px';
            mouseUp();

        } else if (offset < minPos) {

            secondThumb.style.left = minPos + 'px';
            mouseUp();

        };
    };

    function mouseUp() {
        firstThumbLeft = firstThumb.offsetLeft;
        secondThumbLeft = secondThumb.offsetLeft;
        document.removeEventListener('mousemove', handleFirstThumbMove);
        document.removeEventListener('mousemove', handleSecondThumbMove);
        document.removeEventListener('touchmove', handleFirstThumbMove);
        document.removeEventListener('touchmove', handleSecondThumbMove);
    };

    firstThumb.addEventListener('mousedown', (e) => {
        firstThumbLeft = firstThumb.offsetLeft;
        startX = e.clientX;
        document.addEventListener('mousemove', handleFirstThumbMove);
    });

    secondThumb.addEventListener('mousedown', (e) => {
        secondThumbLeft = secondThumb.offsetLeft;
        startX = e.clientX;
        document.addEventListener('mousemove', handleSecondThumbMove);
    });

    firstThumb.addEventListener('touchstart', (e) => {
        firstThumbLeft = firstThumb.offsetLeft;
        startX = e.clientX;
        document.addEventListener('touchmove', handleFirstThumbMove);
    });

    secondThumb.addEventListener('touchstart', (e) => {
        secondThumbLeft = secondThumb.offsetLeft;
        startX = e.clientX;
        document.addEventListener('touchmove', handleSecondThumbMove);
    });

    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('touchend', mouseUp);
    
};
