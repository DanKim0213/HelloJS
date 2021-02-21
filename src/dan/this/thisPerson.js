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
        // () => `${this.firstName} ${this.lastName} raises a ${pet}`
        setTimeout(() => console.log(`${this.firstName} ${this.lastName} raises a ${pet})`) , 1000)
    }
}

console.log(Person.fullName());
console.log(Person.fullName_which_refers_to_Window());
// console.log(Person.fullNmae_which_refers_to_Person('dog'));
Person.fullNmae_which_refers_to_Person('dog');