// exercise 1
//Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!
let myHouse = {
  city: "Birmingham",
  address: "10 Queen way ",
  rooms: 3,
  isFar: false,
  hasGarden: true,
};
/*Exercise 2 
Think of 5 different real world "things" that you can describe with a JavaScript object Assign each of them to a separate variable */
let myWaterBottle = {
  color: "black",
  volume: "500ml",
  isLeakProof: true,
};
let myBook = {
  title: "never say never ",
  author: "Prim Shea",
  pages: 350,
  isHardCover: true,
};
let myBag = {
  color: "red",
  contains: ["phone", "pen", "notebook"],
};
let myCoffeeCup = {
  color: "white",
  contains: "latte",
  isFull: true,
  isHot: false,
};
let myCar = {
  brand: "lamborghini",
  color: "yellow",
  price: 250000,
  doors: 3,
};
/*Exercise 3  */
/*
The objects below have some syntax issues - try and fix them all!
*/

//let kitten = {
// colour: "orange",
// age: 23,
//};

let laptop = {
  brand: "Lenovo",
  ram: "5GB",
}; /*exercise 4 */ /*Objects Get and Set */ /*exercise 1*/ /*
Console.log the values of each property of "kitten"
*/

/* let phone = {
  operatingSystem: "iOS",
  hasStylus: true,
  megapixels: 12,
  batteryLife: "24 hours",
};
 */ let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};
console.log(kitten.ageMonths);
console.log(kitten.isFemale);
console.log(kitten.furColour);
/*exercise 2  */
/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*/

let phone = {
  brand: "iPhone",
  model: "iPhone X",
  launchYear: 2017,
  isUnlocked: true,
};

let phoneBrand = phone.brand;
let phoneLaunchYear = phone["launchYear"]; //the property name needs to be inside a ""

console.log(phoneBrand);
console.log(phoneLaunchYear);

// -> it should output:
// iPhone
// 2017
//Setting the value of a property
//exercise 1
/*
Write code in the space provided so that it outputs "Gilbert"
*/

// WRITE CODE BELOW THIS
kitten.name = "Gilbert"; // changing value of a property
// WRITE CODE ABOVE THIS

console.log(kitten.name);
// -> it should output: "Gilbert"
//exercise 2
/*
Write code in the space provided so that the expected values output
*/

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true
/*More Complex Objects# */
/*
Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.
*/

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
house.address = "51 Berkley Road.";
house.previousOwners = ["Brian M.", " Fiona S."];
house.currentOwner.lastName = "Montgomery";
// - change the address of "house" to '51 Berkley Road'
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);
/**exercise 2  */
/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
newCurrentOwner = house.currentOwner;
house.previousOwners.replace("John A.", "Stephen B.");
house.isForSale = false;
// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house.isForSale}`);
//exercise 3
/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return `${kinningParkHouse.currentOwner.firstName} ${kinningParkHouse.currentOwner.lastName}`;
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  return `${house1.currentOwner.email}, ${house2.currentOwner.email}`;
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  if (house1.price > house2.price) {
    return house2.address;
  }
  return house1.address;
}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);
//object methods
//exercise 1
/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

let person = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello everybody";
  },
  sayName: function () {
    return `My name is ${this.name}`;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
);
//exercise 2
/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
  name: "Alice",
  age: 25,
  currentAddress: "Glasgow",
  changeAddress: function (newAddress) {
    this.currentAddress = newAddress;
  },
  celebrateBirthday: function () {
    this.age = this.age + 1;
  },
};
//exercise 3
/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
  name: "Alice",
  age: 25,
  currentAddress: "Glasgow",
  changeAddress: function (newAddress) {
    this.currentAddress = newAddress;
  },
  celebrateBirthday: function () {
    this.age = this.age + 1;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.changeAddress("Edinburgh");
console.log(
  `Expected result: Edinburgh. Actual result: ${person.currentAddress}`
);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);
//exercise
/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend: function (name) {
    this.friends.push(name);
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
);
//exercise 5
/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
    this.insertedAmount += amount;
  },
  getCoffee: function (coffee) {
    if (this.prices[coffee] === undefined) {
      return `We don't sell ${coffee}`;
    }
    if (this.insertedAmount[coffee] >= this.prices[coffee]) {
      this.insertedAmount -= this.prices[coffee];
      return `please take your ${coffee}`;
    }
    return `Sorry you don't have enough money for a ${coffee}`;
  },
};

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);
//array of object
/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let persons = [person1, person2, person3]; // Complete here

let personNames = [person1.name, person2.name, person3.name]; // Complete here

let personsYoungerThan28YearsOld = []; // Complete here
for (var i = 0; i < persons.length; i++) {
  if (persons[i].age < 28) {
    personsYoungerThan28YearsOld.push(persons[i]);
  }
}
console.log(personsYoungerThan28YearsOld);
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1: array defined with 3 persons -> ",
  persons[0] === person1 && persons[1] === person2 && persons[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 2: array containing the person names -> ",
  personNames[0] === "Alice" &&
    personNames[1] === "Bob" &&
    personNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 3: array containing the persons younger than 28 years old -> ",
  personsYoungerThan28YearsOld[0] === person1 &&
    personsYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
);
//exercise 2
/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let destinationNamesWithin500Kms = []; // Complete here
for (var i = 0; i < travelDestinations.length; i++) {
  if (travelDestinations[i].distanceKms < 500) {
    destinationNamesWithin500Kms.push(travelDestinations[i].destinationName);
  }
}

let destinationNameReachableByFerry = []; // Complete here
for (var i = 0; i < travelDestinations.length; i++) {
  if (travelDestinations[i].transportations.includes("ferry")) {
    destinationNameReachableByFerry.push(travelDestinations[i].destinationName);
  }
}

let destinationNamesMoreThan300KmsAwayByTrain = []; // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
for (var i = 0; i < travelDestinations.length; i++) {
  if (
    travelDestinations[i].distanceKms > 300 &&
    travelDestinations[i].transportations.includes("train")
  ) {
    destinationNamesMoreThan300KmsAwayByTrain.push(
      travelDestinations[i].destinationName
    );
  }
}

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`
);
//exercise 3
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
