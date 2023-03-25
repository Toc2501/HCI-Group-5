function createElem(typ = 'div', classes = []) {
    elmnt = document.createElement(typ)
    for (clss of classes)
        elmnt.classList.add(clss)
    return elmnt
}


function addFunk(card) {
   const qtyControl = card.querySelector('.qtyControl'); //gets quantity control section of the card

   //get increment/ decrement buttons and add functionality to them
   const fkButtons = qtyControl.querySelectorAll('.fkBtn')
   fkButtons[0].addEventListener('click', (e) => {
       let input = qtyControl.querySelector('.inputQty');
       if (input.value > input.min)
           input.value = input.value - 1;
   });

   fkButtons[1].addEventListener('click', (e) => {
       let input = qtyControl.querySelector('.inputQty');
       const numAvailable = card.querySelector('.numAvailable')
       const numA = parseInt(numAvailable.innerHTML)
       if (input.value < input.max & input.value < numA)
           input.value = parseInt(input.value) + 1;
   });


   //add flipping motion
   const front = card.querySelector(".cardFront")
   const goBack = card.querySelector('.returnToFront')
   const list = [front, goBack]
   for (a of list)
       a.addEventListener("click", (e) => {
           card.classList.toggle('cardFlipped')
       });

   //link stuff to the add to card button
   //***** TO DO**********/
}

/* FUNCTIONS BELOW NEEDS TO BE ADJUSTED TO
HOW INFO REGARDING THE CARD WILL BE PASSED
TO THE FUCTION*/

//front of the card
function createFront(imgsrc,name,price){
    const front = createElem('div',['cardFront'])
    const img = createElem('img')
    const title = createElem('h3')
    const priceTag = createElem('p',['itemPrice'])

    img.src = imgsrc
    title.innerHTML = name
    priceTag.innerHTML = '$'+price

    front.title = 'click me!'
    front.append(img,title,priceTag)
    return front;
}



//create qtyControl
function createQtyControl(name){
    let container = createElem('div',['qtyControl'])
    let dec = createElem('div',['dec','fkBtn']) //its fakeBtn not f*ckBtn
    dec.setAttribute("id", name + "decrement")
    let inc = createElem('div',['inc','fkBtn']) //its fakeBtn not f*ckBtn'
    inc.setAttribute("id", name + "increment")

    dec.innerHTML = '&minus;'
    inc.innerHTML = '&plus;'

    let inpField= createElem('input',['inputQty'])
    inpField.type = 'number'
    inpField.min = 0
    inpField.max = 99
    inpField.value = 1
    inpField.setAttribute("id", name + "input")

    container.append(dec,inpField,inc);
    return container
}

//item info such as aisleNo and stock availability
function createBackCardInfo(aisleNo,stockAmount){
    let cardInfo = createElem('div',['cardInfo'])
    let p1 = createElem('p')
    let sec1 = createElem('span',['AisleNo'])
    let p2 = createElem('p')
    let sec2 = createElem('span',['numAvailable'])
    let p3 = createElem('p',['cardMoreInfo'])

    p1.innerText = 'Aisle No:', p2.innerText = 'In Stock:';
    sec1.innerText = aisleNo, sec2.innerText=stockAmount;
    p1.appendChild(sec1)
    p2.appendChild(sec2)
    p3.title = 'under construction'
    p3.innerText = 'more info'

    cardInfo.append(p1,p2,p3)
    return cardInfo
}

//back of the card
function createBack(item){
    const back = createElem('div',['cardBack'])
    const title = createElem('h3')
        title.innerText=item.name;

    const qtyCtrl = createQtyControl(item.name)
    const backInfo = createBackCardInfo(item.aisle,item.available)

    rToFront = createElem('p',['returnToFront'])
    rToFront.setAttribute("id", item.name + "returnToFront")
    rToFront.innerHTML = '&lsaquo;'

    //add to cart button
    const img = createElem('img')
    img.src = 'assets/addToCart.svg'
    const addToCart = createElem('button',['addToCart'])
    addToCart.addEventListener("click", () => {
        const num = document.getElementById(item.name + "input")?.value
        if (num == 0) {
            delete cart[item.name]
        } else {
            cart[item.name] = {item,num}
        }
        updateCart()
    })
    addToCart.appendChild(img)

    back.append(rToFront,title,qtyCtrl,backInfo,addToCart)
    return back
}

//create a card
function createCard(item) {
    let cont = createElem('div', ['cardContainer']) //card container
    let crd = createElem('div', ['card']) //card
    crd.setAttribute("id", item.name + "card")

    const imgsrc = "assets/apple.png"

    const front=createFront(imgsrc, item.name, item.price) // front of the card
    front.setAttribute("id", item.name + "front")
    const back=createBack(item)  //back of the card
    back.setAttribute("id", item.name + "back")

    crd.append(front,back)

    addFunk(crd)
    cont.appendChild(crd)
    return cont
}
