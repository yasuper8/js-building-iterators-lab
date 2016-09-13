// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

// function myEach(arr, callback){
// 	for (var i = 0; i < arr.length; i++){
// 		callback(arr[i],i,arr);
// 	}
// }


function myReduce(arr, callback, start){
var result = start;
	for(var i = 0; i < arr.length; i++){
		result = callback(result,arr[i],i,arr);
	}
	return result; 
}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
