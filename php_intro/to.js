/*
Project Name: php_intro
File Name: to.js
Author: Lance Takiguchi
Date: 09/26/2016 Time: 10:36
Objective: See how the coding concepts work similar between JS and PHP
Prompt: http://learning-fuze.github.io/prototypes_C8/#/PHP-Intro
*/
//EXERCISE 1
var variable1 = "hello";
var variable2 = 4;
var variable3 = ["foo", "bar"];
//EXERCISE 2
variable1 = 4;
variable1 = "hello";
//EXERCISE 3
var numbers = [3, 5, 16, 3, 4, 18];
var result = numbers[0];
for(var i = 1; i < numbers.length; i++){
    result += numbers[i];
}
console.log("Result = " + result);
//EXERCISE 4
console.log("This is a string" + "This is another string");
//EXERCISE 5
var my_float = 3.5;
var my_int = Math.floor(my_float); // ** PHP's (int) just seems to get the floor of a float in base 10
var myfloat2 = 5.3;
var my_int2 = Math.round(my_float); // ** PHP's intval() is a slower (int) that optionally can have a base number chosen
//EXERCISE 6
var my_var1 = "Hello";
if(typeof my_var2 !== "undefined"){
    console.log(my_var2);
}else{
    console.log(my_var1);
}
//EXERCISE 7
var check_var = "What time is it?";
switch(check_var){
    case "hello":
        console.log("greetings");
        break;
    case "bye":
        console.log("good bye");
        break;
    default:
        console.log("It's party time!");
        break;
}
//EXERCISE 8
var student = {name: "Skippy", class: "English", grade: 75};
//EXERCISE 9
function stfClass(){
    this.name = "Skippy";
    this.class = "English";
    this.grade = 75;
}
student = new stfClass();
//EXERCISE 10
var num_array = [35, 2, 14, 56, 65, 52];
function find_greatest_num_and_index(direction){
    var greatest = null;
    var greatest_index = null;

    var i = num_array.lenght;
    var increment = -1;
    var end_loop = 0;
    if(direction >= 0){
        i = 0;
        increment = 1;
        end_loop = num_array.length;
    }
    while(i != end_loop){
        if(num_array[i] > greatest){
            greatest = num_array[i];
            greatest_index = i;
        }
        i += increment;
    }
    return {greatest: greatest, greatest_index: greatest_index}
}
find_greatest_num_and_index(1);
