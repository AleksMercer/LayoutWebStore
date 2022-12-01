/*———Search—————————————————————————————————————————————————————————————————————*/

const searchButton = document.querySelector('.search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => searchInput.classList.toggle('active'))

/*——————————————————————————————————————————————————————————————————————————————*/

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



/*———red indicator above the shopping cart icon ————————————————————————————————*/

const shopingCartIcon = document.querySelector('.shoping-cart-icon') 

redIndicator = () => {
  let goodsArr = JSON.parse(localStorage.getItem('goodsArray'));

  if (goodsArr !== null) {
    if (goodsArr.length > 0) {
      shopingCartIcon.classList.add('active');
    } else if (goodsArr.length == 0) {
      shopingCartIcon.classList.remove('active');
    }
  }
}

redIndicator();

/*——————————————————————————————————————————————————————————————————————————————*/