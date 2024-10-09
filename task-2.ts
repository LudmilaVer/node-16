interface Person {
    name: string;
    age: number;
    city: string;
  }
  
  function printPersonInfo(person: Person): void {
    console.log(`
      Name: ${person.name} 
      Age: ${person.age}
      City: ${person.city}
      `);
  }
  
  const person: Person = { name: "Ludmila", age: 40, city: "Villingen" };
  printPersonInfo(person);