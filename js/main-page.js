/*———Import goods from JSON-file———————————————————————————————————————————————————————————————————————————*/

const response = await fetch('./json/products.json')
const JSONproducts = await response.json();

const goodsBlock = document.querySelector('.goods__block');
const productsArray = JSONproducts.products;

const goodsFunc = () => {

  if (productsArray.length > 0) {

    for(let i = 0; i < productsArray.length; i++) {

      let name = productsArray[i].name;
      let url = productsArray[i].url;
      let price = productsArray[i].price;

      let newGoodsElement = `
        <div class="card">
          <div class="card__img">
            <p>Goods_pic<span>_png</span></p>
          </div>
          <div class="card__main-name">
            <p>${name}</p>
          </div>
          <div class="card__sub-name">
            <p>Goods_sub-name</p>
          </div>
          <div class="card__description">
            <p>Some description of the product, characteristics or other information.</p>
            <p>Some description of the product, characteristics or other information.</p>
            <p>Some description of the product, characteristics or other information.</p>
            <p>Some description of the product, characteristics or other information.</p>
          </div>
          <a href="${url}" class="card__more" target="_blank">
            <p>more_info</p>
          </a>
          <button class="card__price card__price-hover">
            <img src="./media/icon/add_shopping_cart.svg" alt="" class="icon-mid-style">
            <p><span class="span-price">Price:</span> <span>${price}</span> $</p>
          </button>
        </div>
      `;

      goodsBlock.insertAdjacentHTML('beforeend', newGoodsElement);
    }
  }
};

goodsFunc();

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Local-storage-cart—————————————————————————————————————————————————————————*/

//let goodsArray = []; - common.js

const test = () => {

  const addToCartBtn = document.querySelectorAll('.card__price-hover');

  addToCartBtn.forEach(addToCart => {

    addToCart.addEventListener('click', e => {

      const localItems = JSON.parse(localStorage.getItem('goodsArray'));

      const name = e.currentTarget.parentElement.children[1].children[0].textContent;
      const price = e.currentTarget.children[1].children[1].textContent;
      const href = e.currentTarget.parentElement.children[4].getAttribute('href');

      let quantity = 1;

      if (localItems !== null) {

        goodsArray = localItems;
        
        for(let i = 0; i < localItems.length; i++) {

          if (localItems[i].name == name && localItems[i].price == price && localItems[i].href == href) {

            localItems[i].quantity = ++localItems[i].quantity;
            localStorage.setItem('goodsArray', JSON.stringify(localItems));
            return
          }
        } 
      }

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
}

test();

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Goods-filter———————————————————————————————————————————————————————————————*/

const filterBtn = document.querySelector('.filter-btn');
const filterBlock = document.querySelector('.filter-form');
const filterBlockInputs = document.querySelectorAll('.filter-input');

filterBtn.addEventListener('click', (e) => filterBlock.classList.toggle('active'));

filterBlockInputs.forEach(input => {

  input.addEventListener('click', e => {
    
    let card = document.querySelectorAll('.card');
    card.forEach(e => e.remove())

    switch (e.target.value) {
      case "name-first-last":       
        productsArray.sort((a, b) => `${a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1}`);
        break;
      case "name-last-first":       
        productsArray.sort((a, b) => `${a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1}`);
        break;
      case "price-low-high":       
        productsArray.sort((a, b) => `${a.price > b.price ? 1 : -1}`);
        break;
      case "price-high-low":       
        productsArray.sort((a, b) => `${a.price < b.price ? 1 : -1}`);
        break;
    }

    goodsFunc();  test();
  })
});

/*——————————————————————————————————————————————————————————————————————————————*/



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

catalogBtn.addEventListener('click', (e) => catalogBlock.classList.toggle('active'));

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