// Function basic

// function add() {
//   let a = parseInt(prompt("Enter the number"));
//   let b = parseInt(prompt("Enter the 2nd number"));
//   let result = a + b;

//   console.log(result);
// }

// function sub() {
//   let a = prompt("Enter the number");
//   let b = prompt("Enter the 2nd number");
//   let result = a - b;

//   console.log(result);
// }

// function mul() {
//   let a = prompt("Enter the number");
//   let b = prompt("Enter the 2nd number");
//   let result = a * b;

//   console.log(result);
// }

// function div() {
//   let a = prompt("Enter the number");
//   let b = prompt("Enter the 2nd number");
//   let result = a / b;

//   console.log(result);
// }

// Sign in form

function Signup() {
  let First_name = prompt("Enter your first name");
  let Last_name = prompt("Enter Your last name");
  let age = prompt("Enter your age");
  let Email = prompt("Enter your email adress");
  let password = prompt("Enter your password");

  document.write("Thanks &nbsp", First_name,"&nbsp",Last_name, "&nbsp for signing up");
}

function Signin() {
  email = prompt("Enter Email");
  pwd = prompt("Enter Password");
  email == "bmj@gmail.com" && pwd == "bmj123" || email == "Abdulrehman@gmail.com" && pwd == "Abdul123" ? document.write("Login Successful. Welcome &nbsp",email) : document.write("Invalid Email Or Password");
}
