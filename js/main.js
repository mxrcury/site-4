(function(){
    const headerNav = document.querySelector('.header_nav');
    const burgerItem = document.querySelector('.header_burger');
    const closeItem = document.querySelector('.header_nav_close');

    burgerItem.addEventListener('click',() =>{
        headerNav.classList.add('header_active')
    });
    closeItem.addEventListener('click', () =>{
        headerNav.classList.remove('header_active');
    });
}());
