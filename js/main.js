let scrollContainer = document.querySelector('.slider');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 400;
});

backBtn.addEventListener('click', () =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 400;
});





















