/*1. Filter Unique Values
The Set object type was introduced in ES6, and along with ..., 
the ‘spread’ operator, we can use it to create a new array with only the unique values.*/
// const array = [1, 1, 2, 3, 5, 5, 1]
// const uniqueArray = [...new Set(array)];

// console.log(uniqueArray); // Result: [1, 2, 3, 5]



/*You can use this function if you want to know whether all elements of an array pass a certain test.
 Essentially what this is doing is going through each element of the array and checking to see if they’re all true.*/
// const random_numbers = [ 13, 2, 37, 18, 5 ];
// const more_random_numbers = [ 0, -1, 30, 22 ];

// const isPositive = (number) => {
//    if(number > 0){
//    	console.log("true");
//    }
//    else{
//    	console.log("false");
//    }
// }

// random_numbers.every(isPositive); // returns true
// more_random_numbers.every(isPositive); // returns false



/*The some function almost works exactly the same as the every function. 
There’s only one major difference: the some function tests whether at least one element in the array passes the test implemented.*/
// const random_numbers = [ 13, 2, 37, 18, 5 ]
// const more_random_numbers = [ 0, -1, 30, 22 ]

// const isPositive = (number) => {
//    if(number > 0){
//    	console.log("true");
//    }
//    else{
//    	console.log("false");
//    }
// }

// random_numbers.some(isPositive); // returns true
// more_random_numbers.some(isPositive); // returns true


/*We can easily switch between true and false by using the negative operator ! , 
which will also convert the type to "boolean" .*/
// const isTrue  = !0;
// const isFalse = !1;
// const alsoFalse = !!0;

// console.log(isTrue); // Result: true
// console.log(typeof true); // Result: "boolean"



/*Conditionally setting a variable is both easy and makes your code look more elegant. 
There’s no need to write an if-statement when applying this trick — which personally is one of my favorite tricks in JavaScript.*/
//onst timezone = user.preferred_timezone || 'America/New_York';


/*To quickly convert a number to a string, we can use the concatenation operator + followed by an empty set of quotation marks "" .*/
// const val = 1 + "";

// console.log(val); // Result: "1"
// console.log(typeof val); // Result: "string"


/*The opposite can be quickly achieved using the addition operator + .*/
// let int = "15";
// int = +int;

// console.log(int); // Result: 15
// console.log(typeof int); //Result: "number"


/*Sometimes you want to cast all values in an array*/
// let selected_values = [ '1', '5', '8' ];
// selected_values = selected_values.map((num) => {
// 	return +num;
// }); // [ 1, 5, 8 ]
// console.log(selected_values);



/*Since ES7, it has been possible to use the exponentiation operator ** as a shorthand for powers,
 which is faster than writing Math.pow(2, 3) . */
 //console.log(2 ** 3); // Result: 8


 /*If you want to convert a float to an integer, you can use Math.floor() , Math.ceil() or Math.round() . 
 But there is also a faster way to truncate a float to an integer using |, the bitwise OR operator.*/
// console.log(54.84 | 0);  // Result: 23
// console.log(-23.9 | 0); // Result: -23



/*Destructuring is a JavaScript expression that allows you to extract data from arrays, objects, maps and sets into their own variable.
 It allows you to extract properties from an object or items from an array, multiple at a time.*/
/*old way of object destructuring*/
// const user = {
//     name: 'Frank',
//     age: 23,
//     gender: 'M',
//     member: false
// }

// const name = user.name;
// const gender = user.gender;

/*new way of object destructuring*/
// const user = {
//     name: 'Frank',
//     age: 23,
//     gender: 'M',
//     member: false
// }
// const { name, age, gender, member } = user;

// console.log(name)   // Frank
// console.log(age)    // 23
// console.log(gender) // M
// console.log(member) // false


/*One of the things that you’ll do a lot as a developer is debugging.
 However, debugging is more than just printing out a bunch of log messages in your console using console.log.
The console object has way more helpful functions. It has a time and timeEnd function that can help you analyzing performance. 
It works really simple.*/

// console.time('loop');  

// for (let i = 0; i < 100; i++) {   
//     console.log(i*2);
// }  console.timeEnd('loop');


/*If you want to remove values from the end of an array destructively, there’s are faster alternatives than using splice() .*/
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// array = array.slice(4, 8);

// console.log(array); // Result: [0, 1, 2, 3]



/*Lastly, you may have used JSON.stringify before, but did you realise it can also help indent your JSON for you?
The stringify() method takes two optional parameters: a replacer function, 
which you can use to filter the JSON that is displayed, and a space value.*/
//console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, ' '));