//Code written for Udacity - JavaScript Basics course

// Instructions: 
/* write the function getRelationship(x,y) function, which should
return a string representing whether x is >, <, or = y.

If one or both of the values aren't numbers you function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."

where [this value] and [that value] are replaced with the non-numerical values.
The sentence should be gramatically correct by outputting either is or are and
pluralizing number if necessary.
*/


//define the getRelationship function with inputs x and y
function getRelationship(x, y) {
    var xIsNum = isNaN(x); //local variable to test if x is a number
    var yIsNum = isNaN(y); //local variable to test if y is a number
    if(!xIsNum && !yIsNum){
    	//the previous if statement is true only if both x and y are recognized as numbers
        if(x === y){
        	// return '=' if both x and y are equal numbers
            return '=';
        }
        else{
        	// use a ternary operator to provide the correct comparison for x to y
        	// will return '>' if the first statement is true or '<' otherwise
            compare = (x > y ? '>':'<');
            return compare;
    }
  }
    else{
    	/*both xPart and yPart will test if either is a number.
    	If the input, x or y, is not a number return it as a string, otherwise,
    	return an empty space*/
        var xPart = (xIsNum ? String(x) : '');
        var yPart = (yIsNum ? String(y) : '');
        //Use a ternary operator to capture the proper pluralization of th output
        var plural = ((xIsNum && yIsNum) ? ' are not numbers':' is not a number');
        if(plural === ' are not numbers'){
        	/*The sentence will need adjusting for proper syntax is both inputs are not
        	numbers. Just a quick if statement to correct for that if necessary.*/
            yPart = ' and ' + yPart;
        }
        return "Can't compare relationships because " + xPart + yPart + plural;
    }
};