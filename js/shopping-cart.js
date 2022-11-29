/*———Local-storage-cart—————————————————————————————————————————————————————————*/

const orderList = document.querySelector('.order-list');
const localItems = JSON.parse(localStorage.getItem('goodsArray'));
  
if (localItems !== null) {

  for(let i = 0; i < localItems.length; i++) {

    let id = localItems[i].id;
    let name = localItems[i].name;
    let price = localItems[i].price;
    let href = localItems[i].href;

    let newOrderElement = `
      <div class="order-list__element">
        <p class="order-list__element_number">№<span></span></p>
        <a href="./.${href}" class="order-list__element_name" target="_blank">${name}</a>
        <div class="counter">
          <a class="minus"><img src="./../media/icon/minus.svg" alt="-" class="icon-mid-style icon-small-style minus"></a>
          <input type="text" value="1" disabled>
          <a class="plus"><img src="./../media/icon/plus.svg" alt="+" class="icon-mid-style icon-small-style plus"></a>
        <div class="counter__price"><span>${price}</span> $</div>
        </div>
        <a class="order-list__element_delete" data-id="${id}"><img src="./../media/icon/delete.svg" alt="" class="icon-mid-style"></a>
      </div>
    `
    orderList.insertAdjacentHTML('beforeend', newOrderElement);
  }
}

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Goods number & Empty shopping-cart—————————————————————————————————————————*/

//const orderList
const emptyText = document.querySelector('.empty__shopping-cart');

numberOfGoods = () => {

  let goodsNumber = document.querySelectorAll('.order-list__element_number > span');

  for (let i = 0; i < goodsNumber.length; i++) {
    goodsNumber[i].innerHTML = `${i + 1}`
  }

  if (goodsNumber.length == 0) {
    emptyText.classList.add('active');
    orderList.classList.add('empty');
  } else if (goodsNumber.length !== 0) {
    orderList.classList.remove('empty');
    emptyText.classList.remove('active');
  }
} 

numberOfGoods();

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Total price Calc———————————————————————————————————————————————————————————*/

totalCalc = () => {
  let totalCount = document.querySelectorAll('.counter__price > span');
  let totalPrice = document.querySelector('.total > p > span');

  let total = 0;

  for (let i = 0; i < totalCount.length; i++) {
    total = total + Number(totalCount[i].innerHTML);
  }

  return totalPrice.innerHTML = `${total}`;
} 

totalCalc();

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Goods price and quantity calc —————————————————————————————————————————————*/

const orderListElement = document.querySelectorAll('.order-list__element');

orderListElement.forEach(counter => {

  const counterBlock = counter.children[2];
  const price = counterBlock.children[3].firstChild.innerHTML;

  counterBlock.addEventListener('click', e => {

    const input = e.currentTarget.children[1];
    const priceBlock = e.currentTarget.children[3].firstChild;

    if (e.target.matches('.minus')) {
      if (input.value == 1) return; 
      input.value--;
    }

    if (e.target.matches('.plus')) {
      if (input.value == 99) return; 
      input.value++;
    }

    priceBlock.innerHTML = `${String(input.value * price)}`;
    totalCalc();
  })
})

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Remove goods from order————————————————————————————————————————————————————*/

//const localItems
const deleteButton = document.querySelectorAll('.order-list__element_delete > img');


deleteButton.forEach(deleteBtn => {

  deleteBtn.addEventListener('click', e => {

    const idElement = Number(e.path[1].dataset.id);

    let i = 0;

    for (; i < localItems.length; i++) {
      if (idElement == localItems[i].id) break;
    }

    localItems.splice(i, 1);
    localStorage.setItem('goodsArray', JSON.stringify(localItems));
    
    e.path[2].remove();
    numberOfGoods();
    totalCalc();
  })
})

/*——————————————————————————————————————————————————————————————————————————————*/