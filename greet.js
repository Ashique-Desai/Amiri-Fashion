// Code in plain English, below:

// Greet a person:
// if it's an enemy, greet: "Go To Hell" {Enemy's Name}.
// else, "Hi How are you" {Friend's Name}.


// Real Code starts from here: 
const Enemy = "Mihir";

function greet(Person) {
    if (Person == Enemy) {
        console.log('Go To Hell, You Are A Bully', ',', `${Enemy}`);
    }
    else {
        console.log("Hi, How Are You", `${Person}`);
    }
}

greet("Mihir");
greet("Sujal");

// eslint-disable-next-line no-undef
module.exports = {greet};



