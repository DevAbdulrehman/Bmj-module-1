// //Array map method
// let users = [];

// function push() {
//   let names = document.getElementById("name").value;
//   users.push(names);
//   console.log(users);
//   document.getElementById("name").value = "";
// }

// function printNames() {
//   users.map((elements, index, array) => {
//     document.write(`<h1> ${index}:${elements}</h1> `);
//   });
// }

// // Dom css styling
// function bgChng() {
//   document.getElementById("test-bg").classList.toggle("bg-dark");
// }

// function removeBdr() {
//   document.getElementById("test-bg").classList.remove("border");
// }
// let x = document.getElementById("test-bg").classList.contains("bg-primary");
// document.getElementById("demo").innerHTML = x;

// Dom create element and append method

// With for loop
// let users = ["Ali", "Zubair", "Qasim", "Ahmed", "Saad", "Kalid", "Abdullah"];
// for(let i=0; i<users.length; i++){
// let childBox= document.createElement("h1")
// childBox.classList.add("border","border-primary","border-3","text-center","p-3","m-2")

// childBox.innerText=users[i]
// document.getElementById("container").appendChild(childBox)

// }

// With Array.map
let users = ["Ali", "Zubair", "Qasim", "Ahmed", "Saad", "Kalid", "Abdullah"];
users.map((elements, index) => {
  let childBox = document.createElement("h1");
  childBox.classList.add(
    "border",
    "border-primary",
    "border-3",
    "text-center",
    "p-3",
    "m-2"
  );
  childBox.innerText = elements;
  document.getElementById("container").appendChild(childBox);
});
