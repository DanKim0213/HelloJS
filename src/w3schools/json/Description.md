# JSON

* JSON is text, written with JavaScript Object Notation.

* JSON uses JavaScript syntax, but the JSON format is text only.

* Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

* JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects. 

* In JSON, values must be: (**cannot**: a function, a date, and undefined) 
    > a string, a number, a boolean

    > an object (JSON object), an array

    > null


## Sending Data

* JSON.stringify(jsObj);
```
var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj); // convert the object into JSON
window.location = "demo_json.php?x=" + myJSON; 
```

## Receiving Data

* JSON.parse(objJSON);
```
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name; 
```

## Storing Data

* When storing data, **text** is always one of the legal formats.
```
// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name; 
```

[here](https://www.w3schools.com/js/js_json_intro.asp)