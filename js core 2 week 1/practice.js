/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats,
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
and returns the number of restaurants in this area.
*/

let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
  WRITE YOUR CODE BELOW
  */
let available = [];
let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    // Complete here
    for (var i = 0; i < restaurants.length; i++) {
      return (
        restaurants[i].totalSeats - restaurants[i].numberOfCustomers >
        numberOfPeople
      );
    }
  },
  findRestaurantServingDish: function (dishName) {
    // Complete here
  },
  countNumberOfRestaurantsInArea: function (area) {
    // Complete here
  },
};

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
  "salad"
);
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
  "center"
);
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);
// object built in methods
//exercise 1
/*

Return the keys and values of the following object

*/

let capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa",
};

let highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergi", "Frank"],
};

// ONLY EDIT BELOW HERE

let capitalCitiesKeys = Object.keys(capitalCities);
let highScoresKeys = Object.keys(highScores);
let capitalCitiesValues = Object.values(capitalCities);
let highScoresValues = Object.values(highScores);

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys);
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues);
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']
//exercise 2
/*

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

// ONLY EDIT BELOW THIS LINE

let mentorsNames = Object.keys(mentorsAges);

let mentorsNamedUppercased = [];

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]
