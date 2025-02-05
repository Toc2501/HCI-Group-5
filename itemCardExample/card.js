function createElem(typ = 'div', classes = []) {
    elmnt = document.createElement(typ)
    for (clss of classes)
        elmnt.classList.add(clss)
    return elmnt
}


function addFunk(card) {
    qtyControl = card.querySelector('.qtyControl'); //gets quantity control section of the card
    console.log(card);

    //get increment/ decrement buttons and add functionality to them
    fkButtons = qtyControl.querySelectorAll('.fkBtn')
    fkButtons[0].addEventListener('click', (e) => {
        input = qtyControl.querySelector('.inputQty');
        if (input.value > 0)
            input.value = input.value - 1;
    });

    fkButtons[1].addEventListener('click', (e) => {
        input = qtyControl.querySelector('.inputQty');
        numAvailable = card.querySelector('.numAvailable')
        numA = parseInt(numAvailable.innerHTML)
        if (input.value < input.max & input.value < numA)
            input.value = parseInt(input.value) + 1;
    });


    //add flipping motion
    front = card.querySelector(".cardFront")
    goBack = card.querySelector('.returnToFront')
    list = [front, goBack]
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
    front = createElem('div',['cardFront'])
    img = createElem('img')
    title = createElem('h3')
    priceTag = createElem('p',['itemPrice'])
    
    img.src = imgsrc
    console.dir(img)
    title.innerHTML = name
    priceTag.innerHTML = '$'+price

    front.title = 'click me!'
    front.append(img,title,priceTag)
    return front;
}



//create qtyControl
function createQtyControl(){
    container = createElem('div',['qtyControl'])
    dec = createElem('div',['dec','fkBtn']) //its fakeBtn not f*ckBtn
    inc = createElem('div',['inc','fkBtn']) //its fakeBtn not f*ckBtn'

    dec.innerHTML = '&minus;'
    inc.innerHTML = '&plus;'

    inpField= createElem('input',['inputQty'])
    inpField.type = 'number'
    inpField.min = 0
    inpField.max = 99
    inpField.value = 0

    container.append(dec,inpField,inc);
    return container
}

//item info such as aisleNo and stock availability
function createBackCardInfo(aisleNo,stockAmount){
    cardInfo = createElem('div',['cardInfo'])
    p1 = createElem('p')
    sec1 = createElem('span',['AisleNo']) 
    p2 = createElem('p')
    sec2 = createElem('span',['numAvailable'])
    p3 = createElem('p',['cardMoreInfo'])

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
function createBack(name,aisle,amount){
    back = createElem('div',['cardBack'])
    title = createElem('h3')
        title.innerText=name;

    qtyCtrl = createQtyControl()
    backInfo = createBackCardInfo(aisle,amount)

    rToFront = createElem('p',['returnToFront'])
    rToFront.innerHTML = '&lsaquo;'


    //add to cart button
    img = createElem('img')
    img.src = './addToCart.svg'
    addToCart = createElem('button',['addToCart'])
    addToCart.appendChild(img)

    back.append(rToFront,title,qtyCtrl,backInfo,addToCart)
    return back
}

//create a card 
function createCard(name, imgsrc, price,aisle,amount) {
    let cont = createElem('div', ['cardContainer']) //card container
    let crd = createElem('div', ['card']) //card

    front=createFront(imgsrc,name, price) // front of the card
    back=createBack(name,aisle,amount)  //back of the card
    

    for ( itm of [front,back])
        crd.appendChild(itm)
    

    addFunk(crd)
    cont.appendChild(crd)
    return cont
}





//adding functionality to the card from the example
addFunk(document.querySelector('.card'));







