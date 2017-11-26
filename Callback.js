function sayHiLater(){
    setTimeout(function greet(){
        console.log("Hi");
    },5000);
    console.log("I don't wait for the specified time.")
}

sayHiLater();