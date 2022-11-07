//——Catalog—————————————————————————————————————————————————————————————————————

const openCloseBtn = document.querySelectorAll('.open-close-btn');

openCloseBtn.forEach(openClose => {

   openClose.addEventListener('click', e => {

    let arrowUp = e.currentTarget.children[0];
    let arrowDown = e.currentTarget.children[1];
    let catalogList = e.currentTarget.nextElementSibling;

    if (arrowUp.hidden == true) {
      arrowUp.hidden = false;
      arrowDown.hidden = true;
      catalogList.hidden = false;
    } else if (arrowUp.hidden == false) {
      arrowUp.hidden = true;
      arrowDown.hidden = false;
      catalogList.hidden = true;
    }
  })
})

//——————————————————————————————————————————————————————————————————————————————

//———Search—————————————————————————————————————————————————————————————————————

const searchButton = document.querySelector('.search-button');

searchFunc = (e) => {
  document.getElementById('search-input').classList.toggle('active');
}

searchButton.addEventListener('click', searchFunc)

//——————————————————————————————————————————————————————————————————————————————

//———Header-menu————————————————————————————————————————————————————————————————

const headerMenu = document.querySelector('.header__menu');
const headerMenuBtn = document.querySelector('.header-burger-btn');
const headerMenuLink = document.querySelectorAll('.header__menu > a')

const headerBurger = document.querySelector('.header__menu-block');
const headerBurgerLink = document.querySelector('.menu-block-link');
const headerBurgerLinkFirst = document.querySelector('.menu-block-link > a');

const headerMenuFunc = () => {
  let headerMenuLinkVar = document.querySelectorAll('.header__menu > a')

  headerBurger.classList.toggle('active');
  headerMenuBtn.classList.toggle('active');
  document.body.classList.toggle('active');
  
  headerMenuLink.forEach(e => {
    if (headerMenuLinkVar.length >= 3) {
      headerBurgerLinkFirst.before(e) 
    } else if (headerMenuLinkVar.length < 3) {
      headerMenu.append(e) 
    } 
  })
}

headerMenuBtn.addEventListener('click', headerMenuFunc)
headerBurger.addEventListener('click', headerMenuFunc)

//——————————————————————————————————————————————————————————————————————————————

//———Promotion-gallery——————————————————————————————————————————————————————————



//——————————————————————————————————————————————————————————————————————————————

