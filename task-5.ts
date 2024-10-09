interface Student {
    name: string;
    grade: number;
  }
  
  function printStudentInfo(student: Student): void {
    console.log(`
      Student: ${student.name}
      Grade: ${student.grade}
      `);
  }
  
  const student: Student = { name: "Ludmila", grade: 70 };
  printStudentInfo(student);