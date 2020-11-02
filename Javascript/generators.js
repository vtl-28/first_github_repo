// function* generatorFunction() {
// 	yield 1;
// }
// const iterator = generatorFunction()
// const value=iterator.next().value
// console.log(value);

// function* generatorFunction() {
// let value = yield null;
// yield value+ 2;
// yield value + 3;  
// yield value + 4;
// }
// const iterator = generatorFunction();
// console.log(iterator.next(10).value); // returns null
// console.log(iterator.next(11).value); //return 13
// console.log(iterator.next(14).value);
// // console.log(iterator.next(17).value)


// function* generatorFunction() {
// yield  1;
// yield 2;
// yield 3; 
// }
// const iterator = generatorFunction()
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);


// function* countInfinite(){
// 		let i=0;
// 		while(true){
// 			yield i;
// 			i++
// 		}
// }
// const iterator= countInfinite()
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)


// function* fibonacci(num1, num2) {
// 	while (true) {
// 		yield (() => {
// 			num2 = num2 + num1;
// 			num1 = num2 - num1;
// 			return num2;
// 		})();
// 	}
// }
// const iterator = fibonacci(0, 1);
// for (let i = 0; i < 10; i++) {
// console.log(iterator.next().value);
// }
