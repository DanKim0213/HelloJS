// Regular Function vs Arrow Function
// https://www.w3schools.com/js/js_arrow_function.asp

// Regular Function:
regular_hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", regular_hello);
// A button object calls the function:
document.getElementById("btn").addEventListener("click", regular_hello); 


// Arrow Function:
arrow_hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", arrow_hello);
// A button object calls the function:
document.getElementById("btn").addEventListener("click", arrow_hello); 

/**
 * In short, with arrow functions there are no binding of this.
 * 
 * In regular functions the this keyword represented the object that **called** the function, 
 * which could be the window, the document, a button or whatever.
 * With arrow functions the this keyword always represents the object that **defined** the arrow function.
 */

const Person = {
    firstName: 'Viggo',
    lastName: 'Dotraki',

    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    fullName_which_refers_to_Window: () => 
        `${this.firstName} ${this.lastName}`
    ,

    fullNmae_which_refers_to_Person: function(pet) {
        () => `${this.firstName} ${this.lastName} raises a ${pet}`
    }
}

console.log(Person.fullName());
console.log(Person.fullName_which_refers_to_Window());
console.log(Person.fullNmae_which_refers_to_Person());