const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold: 0.15
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});