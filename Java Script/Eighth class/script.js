// array object method
// let users= [
//     {
//          name :"Ahmed",
//          age : 17,
//          email:"Ahmed@gmail.com",
//          pwd:"ahmed123"
//     },

//     {
//          name :"Zubair",
//          age : 19,
//          email:"Zubair@gmail.com",
//          pwd:"zubair123"
//     },

//     {
//          name :"Qasim",
//          age : 21,
//          email:"Qasim@gmail.com",
//          pwd:"qasim123"
//     },

//     {
//          name :"Haris",
//          age : 20,
//          email:"Haris@gmail.com",
//          pwd:"haris123"
//     },
// ]

// for( let i=0; i<users.length;i++){
//     console.log("User",[i],"data")
//     console.log("Name", users[i].name)
//     console.log("Age", users[i].age)
//     console.log("Email ", users[i].email)
//     console.log("Password ", users[i].pwd)
// }

// for( let i=0; i<users.length;i++){
//     document.write("User &nbsp ",[i]," data <br>")
//     document.write("Name :", users[i].name,"<br>")
//     document.write("Age :", users[i].age,"<br>")
//     document.write("Email :", users[i].email,"<br>")
//     document.write("Password :", users[i].pwd,"<br>")
// }

let users = [];

function register() {
     users.push({
          name:prompt("Enter your name"),
          age:prompt("Enter your age"),
          email:prompt("Enter your email"),
          pass:prompt("Enter your password")
       })
     console.log(users)
}
