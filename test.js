//https://www.codewars.com/kata/5829c2c8ef8d4474300000fa/train/javascript

// 📌 DESCRIPTION:

// Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

// Given a list of students, sort them by (from most important to least important):

// GPA (descending)
// First letter of last name (ascending)
// Age (ascending)
// And the class Student:

// class Student {
//   constructor(age, gpa, fullName) {
//     this.age = age;
//     this.gpa = gpa;
//     this.fullName = fullName;
//   };
// };
// Return the sorted result as full names string, comma separated.

// For Example, given the list (name, age, gpa):

// David Goodman, 23, 88
// Mark Rose, 25, 82
// Jane Doe, 22, 90
// Jane Dane, 25, 90


// 💡 SOLUTION:

class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
  };

  
  var students = [
    new Student(23, 88, "David Goodman"), 
    new Student(25, 82, "Mark Rose"), 
    new Student(22, 90, "Jane Doe"),
    new Student(25, 90, "Jane Dane")
];

function sort(students) {
     students.sort((a,b) => {
        if (a.gpa === b.gpa) {
            if (a.fullName.split(' ')[1][0] === b.fullName.split(' ')[1][0]) {
                if (a.age>b.age) {return 1}
                if (a.age<b.age) {return -1}
                return 0
            };
            if (a.fullName.split(' ')[1][0]>b.fullName.split(' ')[1][0]) {return 1}
            if (a.fullName.split(' ')[1][0]<b.fullName.split(' ')[1][0]) {return -1}
            return 0
        };
        if (a.gpa<b.gpa) {return 1}
        if (a.gpa>b.gpa) {return -1}
        return b.gpa-a.gpa  
    })
    return students.map(item => item.fullName).join(',')
  };
  console.log(sort(students));
