var animal = {};
animal.species = "camel";
animal['name'] = "Joe";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "oink";
noises.push("roar");
noises.unshift("hello");
noises[noises.length] =("cawcaw");
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal['noises'] = noises;
noises.push("hollaaa");
console.log(animal);

var animals = [];
animals.push(animal);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);

var lion = {
    species: "cat",
    name: "Money",
    noises: ["meow", "roar", "moo",]
};
animals.push(lion);

var shark = {
    species: "fish",
    name: "Aiden",
    noises: ["booo", "crackle", "yummy"]
    };
    animals.push(shark);
    console.log(animals);

var friends = []; // creating only names
function getRandom() {
  var i = Math.floor(Math.random() * animals.length);
  friends.push(animals[i].name);
}
getRandom();
    console.log(friends);
animals[0].friends = friends;


function search(animalName) {
    for (var i = 0; i < animals.length; i++) {
    if (animals[i].name === animalName){
    return animals[i]; 
    }
   }    return null;
}

function edit(name, object) {
    for (var i = 0;i < animals.length; i++){
    if (animals[i].name === name) {
        animals[i] = object;
    }
}
}
function remove(name) {
    for (var i = 0; i < animals.length; i ++)
    if (animals[i].name === name){
    return animals.splice(i, 1);
}
}
function create(object) {
   if (object.name.length > 0 && object.species.length >0){
    for (var i = 0; i < animals.length;i ++) {
    if  (animals[i].name === object.name){
    return null;
   }
  }
    animals.push(object);
}
    
}
    
