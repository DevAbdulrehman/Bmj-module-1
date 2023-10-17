<<<<<<< HEAD
// Array Methods

let names= []

function sort(){
    names.sort()

    console.log(names)

}

function reverse(){

    names.reverse()
    console.log(names)
}

function pop(){

    names.pop();
    console.log(names);

}

function push(){

    add_names=prompt("Enter the name")

    names.push(add_names);
    console.log(names);

}

function shift(){

    names.shift();
    console.log(names);

}

function unshift(){

    add_names=prompt("Enter the name")

    names.unshift(add_names);
    console.log(names);

}

// let email = [];
// let pass = [];

// function register() {
//    email.push( prompt("Enter your email"));
//    pass.push(prompt("Enter your password"));

//   console.log("User registered successfully");
// }

// function login() {
//   let login_email = prompt("Enter your email");
//   let login_pass = prompt("Enter your password");

//   for (let i=0; i<=email.length; i++) {
//     if (login_email == email[i]&& login_pass==pass[i] ) {
//       console.log("User found and allowed");
//     }
//   }
// }
=======
// Array Methods

// let names= []

// function sort(){
//     names.sort()

//     console.log(names)

// }

// function reverse(){

//     names.reverse()
//     console.log(names)
// }

// function pop(){

//     names.pop();
//     console.log(names);

// }

// function push(){

//     add_names=prompt("Enter the name")

//     names.push(add_names);
//     console.log(names);

// }

// function shift(){

//     names.shift();
//     console.log(names);

// }

// function unshift(){

//     add_names=prompt("Enter the name")

//     names.unshift(add_names);
//     console.log(names);

// }

let email = [];
let pass = [];

function register() {
   email.push( prompt("Enter your email"));
   pass.push(prompt("Enter your password"));

  console.log("User registered successfully");
}

function login() {
  let login_email = prompt("Enter your email");
  let login_pass = prompt("Enter your password");

  for (let i=0; i<=email.length; i++) {
    if (login_email == email[i]&& login_pass==pass[i] ) {
      console.log("User found and allowed");
    }
  }
}
>>>>>>> 30ea37ece510bbbdb291942ba89e92574417064e
