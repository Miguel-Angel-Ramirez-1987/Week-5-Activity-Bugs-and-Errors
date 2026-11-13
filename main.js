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
