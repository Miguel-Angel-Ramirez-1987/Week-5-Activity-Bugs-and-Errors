/** The creation works!
 *
 *  My apporach to the solution was to test my colective understanding.
 *
 *  I first created a function on my own. Then I reference the ECMA Script Language Specification.
 *  After I reviewed the book. Then I looked at youtube videos to get insight on workable functions calculating averages
 *
 *  What I did notice is that everyone arrived to the average using  their own approach.
 *
 *
 *  **/

function calculateMyAverage(myGrades) {
  if (myGrades.length === 0) return 0;
  const sum = myGrades.reduce((total, grade) => total + grade, 0);
  return sum / myGrades.length;
}
console.log(
  "my grade average is " + calculateMyAverage([100, 100, 90, 73, 78, 94, 86]),
);

//

// myGrades = [100, 100, 90, 73, 78, 94, 86];

// myAverage = 0;

//      for (let i = 1; i <= myGrades.length; i++) {

// myAverage += myGrades[i];

// }

// myAverage = myAverage / myGrades.length;

//  console.log("My grade average is " + myAverage);
