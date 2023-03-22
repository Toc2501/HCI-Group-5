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
    document.getElementById("searchbar").addEventListener("keyup", () => {
        updateProductList(document.getElementById("searchbar").value, items)
    })
    updateProductList("", items)
}

function updateProductList(text, items) {
    const newDiv = document.createElement("div")
    newDiv.setAttribute("id", "itemlist")
    items.forEach(item => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
            const newItem = document.createElement("div")
            const newContent = document.createTextNode(item.name)
            newItem.appendChild(newContent)
            newDiv.appendChild(newItem)
        }
    })

    const currentDiv = document.getElementById("itemlist")
    currentDiv.replaceWith(newDiv)
}

window.addEventListener("load", init)
