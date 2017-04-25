/**
 * Flattens an array of arrays into one array
 * @param {Array} an array of arrays example  [ [1,2,3], [4,5,6], [7,8,9] ] 
 * @return {Array} [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function Flatten(numbersArrays){
	var flattenedArray = [].concat.apply([], numbersArrays)
	return flattenedArray
}


// Test function
var numbersArray = [ [1,2,3], [4,5,6], [7,8,9] ] 
var result = Flatten(numbersArray)
console.log(result)
