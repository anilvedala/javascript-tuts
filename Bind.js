var person ={
    firstName : "Anil",
    lastName : "Vedala",
    greet : function(){
        console.log("Hi " + this.firstName + ' ' + this.lastName);
    }
}

var anotherFunction = function(){
    this.greet();
}

//just a function call
person.greet();

/**
Binding a context to function.
**/
var bindedCopy = anotherFunction.bind(person);

bindedCopy();


