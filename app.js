const menu = document.body.querySelector('.open-menu');
const navSection = document.body.querySelector('.nav'); 
const backarrow = document.body.querySelector('.material-icons-outlined');
const mainContainer = document.body.querySelector('.container')

menu.addEventListener('click', function(){
    navSection.classList.add('active-nav');
    mainContainer.classList.add('inactive-container');

})

backarrow.addEventListener('click', function(){
    navSection.classList.remove('active-nav');
    mainContainer.classList.remove('inactive-container');
})