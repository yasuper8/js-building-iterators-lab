var myEach = require('./myEach');
var myMap = require('./myEach');
var myReduce = require('./myEach');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

//
// myEach(numArray, function print(element, index, arr) {
//   console.log('inside myEach', element, index, arr);
// });

function print(element, index, arr){
	console.log(element, index, arr);
}

function myEach(arr, callback){
	for(var i = 0; i < arr.length; i++){
		callback(arr[i],i,arr);
	}
}

myEach(numArray, print);




/* myMap */

// var input = ["a","b","c"];
// var output = myMap(input, function capitalize(v){
//     return v.toUpperCase();
// });
// console.log('Testing myMap')
// console.log(output === ["A", "B", "C"]) // assertion

function capitalize(v){
	return v.toUpperCase();
}
 
function myMap(arr, callback){
	var output = [];
	for(var i = 0; i < arr.length; i++){
		output.push(callback(arr[i],i, arr));
	}
	return output;
}

// myMap(numArray, capitalize);

/*my reduce*/

function addTwoNums(a,b){
	return a + b;
}


function myReduce(arr, callback){
var result = arr[i];
	for(var i = 0; i < arr.length; i++){
		callback(result,arr[i],i,arr);
	}
	return; 
}

var reduceResult = myReduce(numArray, addTwoNums);

print(reduceResult);

console.log("the end");
