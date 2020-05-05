// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
// greeting should take three inputs: greeting, location, and time //
// greeting should concatenate these inputs and log them to the console //
var greeting = (greeting, location, time) => {
    let greet = greeting + ' ' + location + ' ' + time;
    console.log(greet);
}; 


// 2.
// should return a count of the number of contestants //
var contestants = function(dogArr){
        return dogArr.length;
};



// 3.
// should use the native filter method to filter out all the contestants whose species isnt 'dog' //
var filterSpecies = dogs.filter(function(dog){
        return dog.species === 'dog';
    });



// 4. 
// assign a copy of the filterSpecies array to the dogContestants variable //
// must use spread operator to do this //
var dogContestants = [...filterSpecies];



// 5. 
// should use native map function to assign a class property to each dog object inside the dogContestants array //
// class should be 'red' if the dog is 0-10 pounds //
// class should be 'yellow' if the dog is 11-20 pounds //
// class should be 'green' if the dogs weight is over 21 pounds //
var dogsWithClasses = dogContestants.map(function(dog){
    if(dog['weight'] < 11){
        dog['class'] = "red";
    }else if(dog['weight'] > 10 && dog['weight'] < 21){
        dog['class'] = "yellow";
    }else{
        dog['class'] = "green";
    }
    return dog;
});
    


// 6.
// should combine the dog objects from the topDogs array into a single object //
// should use recursion to do this //
var firstInClass = function(topDogs){
    // base case: if the topDogs array has no more length, return an empty object //
    // ***RETURN VALUE OF BASE CASE IS LIKE SEED; ITS THE FOUNDATION THAT DATA WILL BE ADDED TO*** // 
    if(!topDogs.length){
        return {};
    }
    // recursive case //
    return Object.assign(topDogs[0], firstInClass(topDogs.slice(1)));
};





// 7.
// count all the votes that were cast //
// include votes for non-dog species //
// use reduce //
var votes = dogs.reduce(function(accDog, currDog){
    return accDog + currDog.votes;
}, 0);

