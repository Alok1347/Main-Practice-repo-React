/*
Statement:- Given a list of N students, every student is marked for M subjects. Each student is denoted by an index value. Their teacher Ms. Margaret must ignore the marks of any 1 subject for every student. For this she decides to ignore the subject which has the lowest class average. Your task is to help her find that subject, calculate the total marks of each student in all the other subjects and then finally return the array of the total marks scored by each student.

Input Specification: input1: An integer value N denoting number of students

input2: An integer value M denoting number of subjects

input3: A 2-D integer array of size N'M containing the marks of all students in each subject.

Output Specification:

Return an integer array of size N containing the total marks of each student after deducting the score for that one subject. 
*/

const marks = [
  [23, 45, 87, 21, 33], // [59, 115, 200 ,139 ]
  [23, 25, 86, 21, 53],
  [13, 45, 27, 31, 53],
];
let totalMarks = [];
const averageMarks = (marks) => {
  for (let i = 0; i < marks[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < marks.length; j++) {
      sum = sum + marks[j][i];
    }
    totalMarks.push(sum);
  }
  return totalMarks;
};
const avgMarks = averageMarks(marks);
let minValue = Math.min(...avgMarks);
const indexValue = avgMarks.indexOf(minValue);
const newMarks = marks.map((mark) =>
  mark.filter((data, i) => i !== indexValue)
);
console.log(newMarks);
const reducedArray = newMarks.map((mark) =>
  mark.reduce((acc, curr) => acc + curr, 0)
);
console.log(reducedArray, "Final Marks");
