/*———Promotion-gallery——————————————————————————————————————————————————————————*/



/*——————————————————————————————————————————————————————————————————————————————*/



/*——Catalog—————————————————————————————————————————————————————————————————————*/

//Открытие/закрытие каталога на <1100px
const catalogBlock = document.querySelector('aside.catalog');
const catalogBtn = document.querySelector('button.catalog-btn');

catalogBtn.addEventListener('click', (e) => {
  catalogBlock.classList.toggle('active');
})

//Откртыие/закрытие списков внутри каталога
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

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Goods-filter———————————————————————————————————————————————————————————————*/

const filterBtn = document.querySelector('.filter-btn');
const filterBlock = document.querySelector('.filter-form');

filterBtn.addEventListener('click', (e) => {
  filterBlock.classList.toggle('active');
})

/*——————————————————————————————————————————————————————————————————————————————*/
