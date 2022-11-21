/*———Goods number & Empty shopping-cart—————————————————————————————————————————*/
const orderList = document.querySelector('.order-list');
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



/*———remove goods from order————————————————————————————————————————————————————*/

const deleteButton = document.querySelectorAll('.order-list__element_delete > img');

deleteButton.forEach(deleteBtn => {

  deleteBtn.addEventListener('click', e => {

    e.path[2].remove();
    numberOfGoods();
    totalCalc();
  })
})

/*——————————————————————————————————————————————————————————————————————————————*/