/*———Search—————————————————————————————————————————————————————————————————————*/

import JSONproducts from './../json/products.json' assert {type: 'json'};

const searchButton = document.querySelector('.search-button');
const searchBlock = document.querySelector('.search-block');

const searchInput = document.querySelector('.search-block__input');

const foundGoods = document.querySelector('.search-block__found-goods');
const productsArray = JSONproducts.products;

/*——Open/close-search————————————————————————————————————————————————————————————*/

searchButton.addEventListener('click', () => searchBlock.classList.toggle('active'))

/*———product-search——————————————————————————————————————————————————————————————*/

//let goodsArray = []; - common.js

searchInput.addEventListener('keyup', () => {

  let card = document.querySelectorAll('.search-card');
  card.forEach(e => e.remove())

  let inputValue = searchInput.value.toLowerCase();

  for(let i = 0; i < productsArray.length; i++) {

    let name = productsArray[i].name;
    let url = productsArray[i].url;
    let price = productsArray[i].price;

    if (productsArray[i].name.toLowerCase().indexOf(inputValue) > -1 && inputValue !== '' && inputValue !== ' ') {

      let newGoodsElement = `
        <div class="search-card">
          <div class="search-card__img">
            <p>Pic</p>
          </div>
          <a href="${url}" class="search-card__name">${name}</a>
          <div class="search-card__price"><span>${price}</span> $</div>
          <button class="search-card__button">
            <img src="./../media/icon/add_shopping_cart.svg" alt="#" class="icon-big-style">
          </button>
        </div>
      `
      foundGoods.insertAdjacentHTML('beforeend', newGoodsElement);
    }
  }

  let addToCartBtn = document.querySelectorAll('.search-card__button');

  addToCartBtn.forEach(addToCart => {

    addToCart.addEventListener('click', e => {

      const localItems = JSON.parse(localStorage.getItem('goodsArray'));
  
      const name = e.currentTarget.parentElement.children[1].textContent;
      const price = e.currentTarget.parentElement.children[2].children[0].textContent;
      const href = e.currentTarget.parentElement.children[1].getAttribute('href');
  
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

})

/*——————————————————————————————————————————————————————————————————————————————*/