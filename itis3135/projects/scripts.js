window.onload = () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    if (preloader && content) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                content.classList.remove('hidden');
                content.classList.add('visible');
            }, 300);
        }, 2000);
    }
};


const filterButtons = document.querySelectorAll('.filter-buttons button');
const gridItems = document.querySelectorAll('.grid-item');

function setActiveButton(clickedButton) {
    filterButtons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
}

function filterImages(category) {
    gridItems.forEach(item => {
        const itemType = item.getAttribute('data-type');

        if (category === 'all' || itemType === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');

        setActiveButton(button);
        filterImages(category);
    });
});

filterImages('all');

