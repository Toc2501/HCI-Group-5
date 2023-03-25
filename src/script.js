items = [
    {
        "id"    :  1,
        "name"  :   "Apple",
        "aisle" :   2,
        "sold-in": "singles",
        "category"  : "Fruits",
        "available" : 256,
        "price" : 0.79
    },
    {
        "id"    :  2,
        "name"  :   "Carrot",
        "sold-in"   : "singles",
        "aisle" :   1,
        "category"  : "Vegetables",
        "available" : 105,
        "price" : 1.95
    },
    {
        "id"    : 3,
        "name"  : "Cut Broccoli",
        "sold-in"   : "1kg bag",
        "aisle" :   1,
        "category"  : "Vegetables",
        "available" : 105,
        "price" : 3.50
    },
    {
        "id"    : 4,
        "name"  : "Cilantro",
        "sold-in"   : "bunches",
        "aisle" :   1,
        "category"  : "Herbs",
        "available" : 45,
        "price" : 0.86
    }
]

function init() {
    document.getElementById("about-menu-item").addEventListener("click", () => {
        aboutUs()
    })
    document.getElementById("logo").addEventListener("click", () => {
        backToProducts()
    })
    document.getElementById("searchbar").addEventListener("keyup", () => {
        updateProductList(document.getElementById("searchbar").value, items)
    })
    updateProductList("", items)
}

function test(item) {
    console.log(item)
}

function updateProductList(text, items) {
    const newDiv = document.createElement("div")
    let count = 0
    newDiv.setAttribute("id", "itemlist")
    items.forEach(item => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
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

    const currentDiv = document.getElementById("itemlist")
    currentDiv.replaceWith(newDiv)

    items.forEach(item => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
            addFunk(item.name, item.available)
        }
    })
}

function backToProducts() {
    const main = document.createElement("div")
    main.setAttribute("class", "main")
    main.setAttribute("id", "main")

    const itemList = document.createElement("div")
    itemList.setAttribute("id", "itemlist")

    main.appendChild(itemList)

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
            <p>We want you to have fun. We want you to have more time. We want you to be healthy and happy. If this in line with your goals, you have come to the right place.</p>
            <p>What are you waiting for? Insert link to categories page here, can maybe add a link where the label is "want to have fun" and then they go to the wordle page bc honestly I think its a fun idea and I disagree with the marker- </p>
    `

    document.getElementById("main").replaceWith(main)
}

window.addEventListener("load", init)
