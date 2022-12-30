const barEl = document.getElementById("bar");
const closeEl = document.getElementById("close");
const navEl = document.getElementById("navbar");
const mobileEl = document.getElementById("mobile");



barEl.addEventListener('click', () => {
        navEl.classList.add('active');
    })


mobileEl.addEventListener('click', () => {
    navEl.classList.add('active');
})





    closeEl.addEventListener('click', () => {
        navEl.classList.remove('active');  
    });



    
