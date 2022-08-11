//Declare an object's properties within curly brackets
//Properties are divided into key value pairs where the key is the name of the property followed by specific value
const cat = {};

cat.name = "Fred";
cat.nickname = "Flooficus";
cat.age = 5;
cat.isSleeping = true;
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"]
//When an object has a property that's a function it's called a method
cat.pet = function () {
    return "purrrrrrrr";
}

//Access with dot notation
console.log(cat.nickname);

//Access with dot notation with brackets to access an array at a specific position
console.log(cat.favoriteToys[2]);

//Bracket notation for looping objects or when the key name has a spce in it
console.log(cat["name"]);

//Object literal syntax
const cat = {
    name: "Fred",
    nickname: "Flooficus",
    age: 5,
    isSleeping: true,
    favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
    pet: function () {
        return "purrrrrrrr";
    }
};

//update properties with dot or bracket notation and the assignment operator
cat.isSleeping = false;
//You can add a property to the object as well
cat["color"] = "orange";

//When creating a method, use the "this" keyword to refrence a property inside a method
cat.play = function () {
    this.isSleeping = false;
    return `${this.nickname} is awake and playing!`
};

//Or put the function inside the object literal

const cat = {
    name: "Fred",
    nickname: "Flooficus",
    age: 5,
    isSleeping: true,
    favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
    pet: function () {
      return "purrrrrrrr";
    },
    play: function () {
      this.isSleeping = false;
      return `${this.nickname} is awake and playing!`;
    }
  };

//To log out a method
console.log(cat.play());

//Remove a specific item from an array
cat.favoriteToys.splice(1,1);