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

//Open/close catalog on <1100px
const catalogBlock = document.querySelector('aside.catalog');
const catalogBtn = document.querySelector('button.catalog-btn');

catalogBtn.addEventListener('click', (e) => {
  catalogBlock.classList.toggle('active');
})

//Open/close list inside catalog
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



/*———Local-storage-cart—————————————————————————————————————————————————————————*/

const addToCartBtn = document.querySelectorAll('.card__price-hover');

let goodsArray = [];

addToCartBtn.forEach(addToCart => {
  
  addToCart.addEventListener('click', e => {

    const localItems = JSON.parse(localStorage.getItem('goodsArray'));

    const name = e.currentTarget.parentElement.children[1].children[0].textContent;
    const price = e.currentTarget.children[1].children[1].textContent;
    const href = e.currentTarget.parentElement.children[4].getAttribute('href');

    let quantity = 1;

    /*if (localItems !== null) {

      for(let i = 0; i < localItems.length; i++) {

        if (localItems[i].name == name && localItems[i].price == price && localItems[i].href == href) {
          localItems[i].quantity
          //здесь должно быть условие , которое при true запихнет в локал сторэдж новое кол -во товару
          //например можно сделать как в удалении, те переделать конкретный элемент
        };
      } 
    }*/

    const good = {
      id: Date.now(),
      name: name,
      price: price,
      href: href,
      quantity: quantity
    };
    
    goodsArray.push(good);
    localStorage.setItem('goodsArray', JSON.stringify(goodsArray));
    redIndicator();
  })
})

/*——————————————————————————————————————————————————————————————————————————————*/