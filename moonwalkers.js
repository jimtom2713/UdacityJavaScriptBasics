/* Create the alphabetizer function to take an array, of length N, of names as input
and output an array, of length N, of names in alphabetical order by last name. 
The input list will be 'firstName lastName' and the output should read 'lastName, firstName'
*/

//Array of astronauts in order of when they walked on the moon.
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

//create the function alphabetizer with an array input, names
function alphabetizer(names) {
  //loop through the entrie array to change the format to 'lastName, firstName'
    for(var i=0;i<names.length;i++){
        names[i] = names[i].split(' '); //split each name on the space
        names[i] = names[i][1] + ', '+ names[i][0]; //put each split name together in proper format
    }
    /*using the array.sort() method for javaScript we can now easily sort the names
    in alphabetical order
    example:
        array =['x','A','X','a'];
        array.sort();
        -> ['A','X','a','x']
    */
    names = names.sort();
       return names;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));