// Assuming 'value' is your original object
let value = {
    name: "John",
    age: 30,
    city: "New York"
};

// Creating a new object by merging 'value' with new properties
let updatedValue = Object.assign({}, value, {
    age: 31,      // Updating the 'age' property
    city: "Boston" // Updating the 'city' property
});

console.log(updatedValue);
// Output:
// {
//     name: "John",
//     age: 31,
//     city: "Boston"
// }
