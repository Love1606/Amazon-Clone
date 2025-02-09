        const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        let counter = 0;
        const size = slide[0].clientWidth;

        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

        nextBtn.addEventListener('click', () => {
            if (counter >= slide.length - 1) return;
            slides.style.transition = "transform 0.5s ease-in-out";
            counter++;
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            slides.style.transition = "transform 0.5s ease-in-out";
            counter--;
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        slides.addEventListener('transitionend', () => {
            if (slide[counter].id === 'lastClone') {
                slides.style.transition = "none";
                counter = slide.length - 2;
                slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if (slide[counter].id === 'firstClone') {
                slides.style.transition = "none";
                counter = slide.length - counter;
                slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
