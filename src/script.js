function init() {
    document.getElementById("about-menu-item").addEventListener("click", () => {
        aboutUs()
    })

    document.getElementById("deals-menu-item").addEventListener("click", () => {
        deals()
    })

    document.getElementById("logo").addEventListener("click", () => {
        backToProducts()
    })
    document.getElementById("searchbar").addEventListener("keyup", () => {
        updateProductList(document.getElementById("searchbar").value, items)
    })
    updateProductList("", items)



    cartSlide()
}

function test(item) {
    console.log(item)
}

function updateProductList(text, items) {
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "itemlist")
    newDiv.setAttribute("id", "main")
    items.forEach(item => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
            newDiv.appendChild(createCard(item))
        }
    })

    const currentDiv = document.querySelector(".itemlist")
    currentDiv.replaceWith(newDiv)

    items.forEach(item => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
            addFunk(item.name, item.available)
        }
    })
}

function backToProducts() {

    // const main = document.createElement("div")
    // main.setAttribute("class", "main")
    // main.setAttribute("id", "main")

    // const itemList = document.createElement("div")
    // itemList.setAttribute("id", "itemlist")

    // main.appendChild(itemList)

    // document.getElementById("main").replaceWith(main)

    const main = document.createElement("div")
    main.setAttribute("class", "itemlist")
    main.setAttribute("id", "main")

    document.getElementById("main").replaceWith(main)
    updateProductList(document.getElementById("searchbar").value, items)
}

function aboutUs() {
    const main = document.createElement("div")
    main.setAttribute("class", "about-us")
    main.setAttribute("id", "main")
    main.innerHTML = `
    <p>At HCI we aren't your average local grocery store. We want your shopping experinece to be simple, efficient and fun. We recognize that shopping for groceries is seen as a mundane, obligatory task that must be completed week after week. We are on a mission to change that.</p>
            <p>We were founded by a group of students studying Computer Science at the University of Manitoba. We were chronically exhausted, overworked and overwhelmed. The last thing we needed was the added stressor of grocery shopping, planning, cooking and meal prepping. We wanted a streamlined experience. We wanted to spend less time planning and more time eating good food.</p>
            <p>This vision gave rise to HCI groceries.</p>
            <p>We want you to have fun. We want you to have more time. We want you to be healthy and happy. If this in line with your goals, you have come to the righto categories page here, can maybe add a link where the label is "want to have place.</p>
            <p>What are you waiting for? Insert link t fun" and then they go to the wordle page bc honestly I think its a fun idea and I disagree with the marker- </p>
    `

    document.getElementById("main").replaceWith(main)
}

function deals(){
    const main = document.createElement("div")
    main.setAttribute("class","center")
    main.setAttribute("id","main")

    main.innerHTML =`   <img src = "./flyerimages/Cilantro.png" alt="cilantro-deal"/>
    <img src = "./flyerimages/Carrots.png" alt="carrots-deal"/>
    <img src = "./flyerimages/Bison.png" alt="bison-deal"/>
    <img src = "./flyerimages/Apples.png" alt="apples-deal"/>
    `
    document.getElementById("main").replaceWith(main)
    console.log("clicked")
}


function cartSlide(){
    const cart = document.querySelector(".cart")
    const bttn = document.querySelector(".cart-button")
    bttn.addEventListener('click',()=>{
        cart.classList.toggle("cartActive")
    })
}


window.addEventListener("load", init)
