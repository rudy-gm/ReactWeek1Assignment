class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(studentToRegister) {
    console.log(studentToRegister);
    //check if the new student email is already registered in the current students

    const duplicateStudents = this.students.filter((existingStudent) => {
      if (existingStudent.email === studentToRegister.email) {
        return true;
      }
    });
    //if the new student is not registered then add it to students array

    if (duplicateStudents.length === 0) {
      this.students.push(studentToRegister);
    } else { //else show a message saying it is
      console.log(
        `student ${studentToRegister.email} is already on the course`
      );
    }

   
  }

  /* registerStudent1(studentToAdd) {
    if (this.students.includes(studentToAdd)) {
      console.log(`student already exist`);
    } else {
      this.students.push(studentToAdd);

      console.log("hello");
    }
  }*/
}

const s1 = new Student("rudy", "r@r.com", "fl");
const s2 = new Student("marshall", "m@m.com", "ct");
const s3 = new Student("ally", "a@a.com", "ny");
const s4 = new Student("pablo", "p@p.com", "tn");
const b1 = new Bootcamp("react", "beginner", [s1]);

b1.registerStudent(s2);
b1.registerStudent(s3);
b1.registerStudent(s4);
b1.registerStudent(s2);
console.log(b1);
