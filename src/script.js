function init() {
    cartSlide()
    updateSearchType()

    document.getElementById("about-menu-item").addEventListener("click", () => {
        resetSearch()
        aboutUs()
    })

    document.getElementById("deals-menu-item").addEventListener("click", () => {
        resetSearch()
        deals()
    })

    document.getElementById("logo").addEventListener("click", () => {
        resetSearch()
        backToProducts()
    })
    document.getElementById("searchbar").addEventListener("keyup", () => {
        updateListViaSearch(document.getElementById("searchbar"), items)
    })

    updateProductList("",'all',items)
}


function updateListViaSearch(bar,items){
    const text = bar.value
    const type = bar.searchBy

    updateProductList(text,type,items)
}

function updateProductList(text, type, items) {
    const newDiv = document.createElement("div")
    let count = 0
    newDiv.setAttribute("class", "itemlist")
    newDiv.setAttribute("id", "main")
    items.forEach(item => {
        let matchCategory = false
        item.category.forEach(category => {
            matchCategory = matchCategory || category.toLowerCase().includes(text.toLowerCase())
        })
        if ( (type=='all' && (item.name.toLowerCase().includes(text.toLowerCase()) || matchCategory)) ||
            (type=='product' && item.name.toLowerCase().includes(text.toLowerCase()) ) ||
             (type=='category' && matchCategory) ) {
            newDiv.appendChild(createCard(item))
            count++
        }
    })

    if (count === 0) {
        const header = document.createElement("H2")
        const text = document.createTextNode("No Results")
        header.appendChild(text)
        newDiv.appendChild(header)
    }

    const currentDiv = document.querySelector(".itemlist")
    currentDiv.replaceWith(newDiv)
}


function backToProducts() {
    const main = document.createElement("div")
    main.setAttribute("class", "itemlist")
    main.setAttribute("id", "main")

    document.getElementById("main").replaceWith(main)
    updateProductList('','all', items)
}


function aboutUs() {
    const main = document.createElement("div")
    main.setAttribute("class", "about-us")
    main.setAttribute("id", "main")
    main.innerHTML = `
    <p>At HCI we aren't your average local grocery store. We want your shopping experinece to be simple, efficient and fun. We recognize that shopping for groceries is seen as a mundane, obligatory task that must be completed week after week. We are on a mission to change that.</p>
            <p>We were founded by a group of students studying Computer Science at the University of Manitoba. We were chronically exhausted, overworked and overwhelmed. The last thing we needed was the added stressor of grocery shopping, planning, cooking and meal prepping. We wanted a streamlined experience. We wanted to spend less time planning and more time eating good food.
            <p>This vision gave rise to HCI groceries.</p>
            <p>We want you to have fun. We want you to have more time. We want you to be healthy and happy. If this in line with your goals, you have come to the righto categories page here, can maybe add a link where the label is "want to have place.</p>What are you waiting for? Insert link t fun" and then they go to the wordle page bc honestly I think its a fun idea and I disagree with the marker- </p>
    `

    document.getElementById("main").replaceWith(main)
}


function showProduct(name) {
    backToProducts()
    updateProductList(name,'all', items)
}


function deals() {
    const main = document.createElement("div")
    main.setAttribute("class", "center")
    main.setAttribute("id", "main")
    main.innerHTML = `
<img src = "./flyerimages/Cilantro.png" alt="cilantro-deal" onclick="showProduct('cilantro')"/>
<img src = "./flyerimages/Carrots.png" alt="carrots-deal" onclick="showProduct('carrot')"/>
<img src = "./flyerimages/Bison.png" alt="bison-deal" onclick="showProduct('bison')"/>
<img src = "./flyerimages/Apples.png" alt="apples-deal" onclick="showProduct('apple')"/>
    `

    document.getElementById("main").replaceWith(main)
}



function cartSlide(){
    const cart = document.querySelector(".cart")
    const bttn = document.querySelector(".cart-button")
    bttn.addEventListener('click',()=>{
        cart.classList.toggle("cartActive")
    })
}

function updateSearchType(){
    const selectB = document.getElementById("search-type")
    const searchBar = document.getElementById("searchbar")

    searchBar.searchBy = 'all' // set default
    selectB.addEventListener("change",()=>{
        (selectB.value == 'all') && (searchBar.placeholder = "Search");
        (selectB.value == 'product') && (searchBar.placeholder = "Search for products");
        (selectB.value == 'category') && (searchBar.placeholder = "Search for category");
        searchBar.searchBy = selectB.value
    })
}

function resetSearch(){
    const selectB = document.getElementById("search-type")
    const searchBar = document.getElementById("searchbar")

    selectB.value = 'all';
    searchBar.searchBy = selectB.value // set default
    searchBar.placeholder = 'Search' // set default
}

function updateCart() {
    const cartContainer = document.createElement("div")
    cartContainer.setAttribute("class", "cart-container")
    cartContainer.setAttribute("id", "cart-container")

    const totals = document.createElement("div")
    totals.setAttribute("id", "totals")

    let subtotal = 0

    Object.keys(cart).forEach((k) => {
        const price = cart[k].num * cart[k].item.price
        subtotal += price
        const text = document.createTextNode(k + " x" + cart[k].num + " @" + cart[k].item.price + "/" + cart[k].item["sold-in"] + " = $" + price.toFixed(2))
        const p = document.createElement("p")
        p.appendChild(text)
        p.addEventListener("click", () => {
            delete cart[k]
            updateCart()
        })
        cartContainer.appendChild(p)
    })

    const subtotalNode = document.createElement("p")
    const subtotalText = document.createTextNode("Subtotal: $" + subtotal.toFixed(2))
    subtotalNode.appendChild(subtotalText)
    totals.appendChild(subtotalNode)

    const taxNode = document.createElement("p")
    const taxText = document.createTextNode("Tax: $" + (subtotal * 0.12).toFixed(2))
    taxNode.appendChild(taxText)
    totals.appendChild(taxNode)

    const totalNode = document.createElement("p")
    const totalText = document.createTextNode("Total: $" + (subtotal * 1.12).toFixed(2))
    totalNode.appendChild(totalText)
    totals.appendChild(totalNode)

    document.getElementById("cart-container").replaceWith(cartContainer)
    document.getElementById("totals").replaceWith(totals)
}

window.addEventListener("load", init)
