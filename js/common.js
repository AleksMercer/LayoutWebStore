/*———Header-menu————————————————————————————————————————————————————————————————*/

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

/*——————————————————————————————————————————————————————————————————————————————*/


//---Array for local storage
let goodsArray = [];
//--------------------------


/*———red indicator above the shopping cart icon ————————————————————————————————*/

const shopingCartIcon = document.querySelector('.shoping-cart-icon'); 
const shopingCartIconSpan = document.querySelector('.shoping-cart-icon > span');

redIndicator = () => {
  
  let goodsArr = JSON.parse(localStorage.getItem('goodsArray'));

  if (goodsArr !== null) {

    if (goodsArr.length > 0) {
      shopingCartIcon.classList.add('active');
      shopingCartIconSpan.innerHTML = `${goodsArr.length}`;
    } else if (goodsArr.length == 0) {
      shopingCartIcon.classList.remove('active');
    }
  }
}

redIndicator();

/*——————————————————————————————————————————————————————————————————————————————*/