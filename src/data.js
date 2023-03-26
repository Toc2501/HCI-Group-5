items = [
    {
        "id"    :  1,
        "name"  :   "Apple",
        "aisle" :   2,
        "sold-in": "singles",
        "category"  : ["Fruits"],
        "available" : 256,
        "price" : 0.79
    },
    {
        "id"    :  2,
        "name"  :   "Carrot",
        "sold-in"   : "singles",
        "aisle" :   1,
        "category"  : ["Vegetables"],
        "available" : 105,
        "price" : 1.95
    },
    {
        "id"    : 3,
        "name"  : "Broccoli",
        "sold-in"   : "1kg bag",
        "aisle" :   1,
        "category"  : ["Vegetables"],
        "available" : 105,
        "price" : 3.50
    },
    {
        "id"    : 4,
        "name"  : "Cilantro",
        "sold-in"   : "bunches",
        "aisle" :   1,
        "category"  : ["Vegetables", "Herbs"],
        "available" : 45,
        "price" : 0.86
    },
    {
        "id"    : 5,
        "name"  : "Rice",
        "sold-in"   : "1kg bag",
        "aisle" :   3,
        "category"  : ["Pantry", "Grain"],
        "available" : 45,
        "price" : 5.25
    },
    {
        "id"    : 6,
        "name"  : "Spaghetti",
        "sold-in"   : "500g box",
        "aisle" :   3,
        "category"  : ["Pantry", "Grain"],
        "available" : 45,
        "price" : 1.20
    },
    {
        "id":7,
        "name":"Bison",
        "sold-in":"lb",
        "aisle":7,
        "category":["Meat"],
        "available":37,
        "price":5
    },
    {
        "id":8,
        "name":"Egg",
        "sold-in":"12 count",
        "aisle":8,
        "category":["Dairy and Eggs"],
        "available":100,
        "price":3.59,
    },
    {
        "id":9,
        "name":"Salt",
        "sold-in":"1kg box",
        "aisle":3,
        "category":["Pantry"],
        "available":10,
        "price":1.27,
    },
    {
        "id":10,
        "name":"Green Onion",
        "sold-in":"bunches",
        "aisle":1,
        "category":["Vegetables"],
        "available":20,
        "price":1.47,
    },
    {
        "id":11,
        "name":"Soy Sauce",
        "sold-in":"500ml bottle",
        "aisle":3,
        "category":["Pantry"],
        "available":45,
        "price":3.47,
    },
]

recipies =[
         {
        "id"    :  1,
        "name"  :   "egg fry rice",
        "Ingredients"   :   ["egg", "salt", "green onion", "rice"," soy sauce"],
        'qty' :   [null,null,null,null],
        "steps" :   ['Bring water, soy sauce, and salt to a boil in a medium saucepan.', 'Stir in rice and remove from heat.',
        'Cover and let stand for 5 minutes.', 'Heat oil in a medium skillet or wok over medium heat.',
        'Sauté onions and green beans in hot oil for 2 to 3 minutes.',
        'Pour in beaten egg and fry for 2 minutes, scrambling egg while it cooks.','Add cooked rice to egg mixture',
        'mix well. Season with pepper.']
    },
        {
        "id"    :  2,
        "name"  :   "Broccoli and Carrot Stir Fry",
        "Ingredients"   :   ["Broccoli", "Carrot"],
        'qty' :   [null,null],
        "steps" :   ['Bring a large pot of lightly salted water to a boil, add broccoli and cook uncovered until bright green, about 2 minutes.', 
        'Transfer broccoli to a bowl of ice water using a slotted spoon and immerse for several minutes to stop the cooking process, drain.',
        'Bring water back to a boil in the same large pot; add sliced carrot and cook for 1 minute, drain.', 
        'Mix water and cornstarch together in a bowl until smooth. Add chicken granules and salt and mix well.',
        'Heat peanut oil in a wok or large skillet over high heat; saute broccoli and carrots for 2 minutes. ',
        'Add cornstarch mixture; cook and stir until vegetables are coated evenly, 1 to 2 minutes.']
    },
        {
        "id"    :  3,
        "name"  :   "Tomato Egg Stir-Fry",
        "Ingredients"   :   ["Tomato", "egg", "salt", "Green Onion"],
        'qty' :   [null,null,null,null],
        "steps" :   ['Start by cutting tomatoes into small wedges and finely chop the scallion.', 
        'Crack 4 eggs into a bowl and season with ¼ teaspoon salt, beat eggs for a minute.',
        'Preheat the wok over medium heat until it just starts to smoke. ', 
        'Then add 2 tablespoons of oil and immediately add the eggs.',
        'Scramble the eggs and remove from the wok immediately. Set aside. ',
        'Add 1 more tablespoon oil to the wok, turn up the heat to high, and add the tomatoes and scallions.',
        'Stir-fry for 1 minute, and then add 2 teaspoons sugar, ½ teaspoon salt, and ¼ cup water. Add the cooked eggs.',
        'Mix everything together, cover the wok, and cook for 1-2 minutes, until the tomatoes are completely softened. ',
        'Uncover, and continue to stir-fry over high heat until the sauce thickens to your liking.']
    }

]

categories = [
    "Meat","Pantry","Grain","Vegetables","Herbs","Fruits","Dairy and Eggs"
]

cart = {
}
