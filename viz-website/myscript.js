const  bar = document.getElementById('bar.md.hydrated');
const  close = document.getElementById('close');
const nav = document.getElementById('navbar');

if ( bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
    
}
 

if ( close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    });
    
}


