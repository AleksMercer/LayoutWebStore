/*———Promotion-gallery——————————————————————————————————————————————————————————*/

const img = document.querySelectorAll('.promotion__gallery > img');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

const lastEl = img.length - 1;
let count = 0;

const nextFunc = () => {
  let i = count;
  count++;

  if (img[lastEl].matches('.active')) {
    img[lastEl].classList.remove('active');
    img[0].classList.add('active'); 
    return count = 0;
  }

  img[i].classList.remove('active');    //img[i].hidden = true;
  img[count].classList.add('active');   //img[count].hidden = false;
}

const previousFunc = () => {
  let i = count;
  count--;

  if (img[0].matches('.active')) {
    img[lastEl].classList.add('active'); 
    img[0].classList.remove('active');
    return count = lastEl;
  }

  img[i].classList.remove('active');    //img[i].hidden = true;
  img[count].classList.add('active');   //img[count].hidden = false;
}

next.addEventListener('click', nextFunc)
previous.addEventListener('click', previousFunc);

setInterval(nextFunc, 4000);


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
