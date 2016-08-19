// ------ Feature Set 1.1 - Build your first function ------
function myMessage(){
    console.log("This is my first function!")
}
// ------ Feature Set 1.3 - Building a function with parameters ------
function add(x, y){
    console.log(x + y);
}
// ------ Feature Set 2.1 - return to add ------
function add2(x, y){
    return x + y;
}
var add2result = add2(3,5);

// ------ Feature Set 3.1 - cardFlip Function ------
function cardFlip(click){
    $(click).hide();
}
