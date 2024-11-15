const myObject = {
    name: "huzaifa",
    age: 23,
    city: "Karachi"
  };
  const numObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  
//   console.log("Object name:", myObject.name);
//   console.log("Object age using bracket notation:", myObject['age']);
  
//   myObject.country = "Pakistan";
//   console.log("Object after adding property:", myObject);
  
//   delete myObject.city;
//   console.log("Object after deleting 'city':", myObject);
  
//   for (let key in myObject) {
//     console.log(`Key: ${key}, Value: ${myObject[key]}`);
//   }
  
//   console.log("Object keys:", Object.keys(myObject));
//   console.log("Object values:", Object.values(myObject));
  
//   console.log("Object entries:", Object.entries(myObject));
  
//   const mergedObject = { ...myObject, ...numObject };
//   console.log("Merged object:", mergedObject);
  
//   console.log("Does property 'name' exist?", 'name' in myObject);
  
//   const frozenObject = Object.freeze({ ...myObject });
//   frozenObject.name = "ali";
//   delete frozenObject.age 
//   console.log("Frozen object (modification attempt):", frozenObject);
  
//   const sealedObject = Object.seal({ ...myObject });
//   sealedObject.name = "ali"; 
//   delete sealedObject.age; 
//   console.log("Sealed object:", sealedObject);
  
//   const newObject = Object.create(myObject);
//   console.log("Object created with Object.create():", newObject);
  
//   const sumOfValues = Object.values(numObject).reduce((total, value) => total + value, 0);
//   console.log("Sum of numObject values:", sumOfValues);