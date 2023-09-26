// ernary Operaotor

// email = prompt("Enter your email");
// password = prompt("Enter your password");
// email == "bmj@gmail.com"
//   ? document.write("Correct email <br>")
//   : document.write("Invalid email <br>");
// password == "bmj123"
//   ? document.write("Correct password <br>")
//   : document.write("Invalid Password <br>");

// username = prompt("Enter your username");
// password = prompt("Enter your password");
// username == "Abdulrehman"
//   ? document.write("Correct username <br>")
//   : document.write("Invalid username <br>");
// password == "ar123"
//   ? document.write("Correct password")
//   : document.write("Invalid Password");

// Ternary Operaotor (by sir bilal)

// email = prompt("Enter Email");
// pwd = prompt("Enter Password");
// (email == "bilal@gmail.com" && pwd == "bilal123") ||
// (email == "ali@gmail.com" && pwd == "ali123") ||
// (email == "asad@gmail.com" && pwd == "asad123")
//   ? document.write("Login Successful")
//   : document.write("Invalid Email Or Password");

// If condition

// // If condition basic
//  age= prompt("Enter your age")

//  if (age>=18){
//     document.write ("Eligible")
//  }
//  else {
//     document.write("Not Eligible")
//  }

// // If condition advance

// age=prompt("Enter your age")

// if(age>=18 && age<=60){
//     document.write("Eligible")
// }

// else if (age>=60 && age<=80){
//     document.write("chacha &#128128;")
// }

// else if (age>=80) {
//     document.write("chacha tum qabar me pao latka ke bhete ho &#128128; &#128128; &#128128;")
// }

// else {
//     document.write("Not eligible")
// }



// time=prompt("Enter the time")

// if (time>=1 && time<=5){
//     document.write("late night &#128564; &#x1F634;")
// }

// else if (time>=6 && time<=12){
//     document.write("Morning &#127749;")
// }

// else if (time>=13 && time<=17){
//     document.write("afternoon")
// }

// else if (time>=18 && time<=19){
//     document.write("evening")
// }

// else if (time>=20 && time<=24){
//     document.write("night &#127747; &#127747;")
// }

// else {
//     document.write("invalid time")
// }

// // Nested condition

// let time=prompt("Choose time: 1)Morning 2(evening 3)Night")

// if (time==1) {
//     let breakfast=prompt("What will you take in breakfast 1)coffe 2)juice")

//     if (breakfast==1){
//         let choice=prompt("1) Cold Coffe 2)Hot Coffe")
//         if(choice==1){
//             document.write("Here is your cold coffe")
//         }
//         else if (choice==2) {
//             document.write("Here is your cold coffe")
//         }
//     }

//     else if(breakfast==2) {
//         let juice_choice=prompt("1)Apple juice 2)Orange juice")
//         if(juice_choice==1){
//            document.write("Here is your apple juice")
//         }
//         else if(juice_choice==2){
//            document.write("Here is your orange juice")
//         }

//    }
// }


// Nested Formula

let formula=prompt("Select Formula 1)v=s/t 2)w=mg 3)F=ma")

if (formula==1){
    let value_velocity_formula=prompt("What do you want to find 1)v 2)s 3)t ")
    if(value_velocity_formula==1){
        let s=prompt("Please enter distance")
        let t=prompt("Please enter time")
        document.write("The velocity of the object is", s/t, "m/s<sup>-1</sup>")
    }

    else if (value_velocity_formula==2){
        let v=prompt("Please enter the velocity of the object")
        let t=prompt("Please enter the time taken for object to travel")
        document.write("The distance the object had travelled is",v*t,"m")
    }

    else if (value_velocity_formula==3){
        let s=prompt("Please enter the distance the object has travelled")
        let v=prompt("Please enter the velocity of the object ")
        document.write("The time taken for object to complete the journey is",s/v,"s")
    }

    else{
        document.write("Please select from the given options")
    }
}

else if (formula==2){
    let weight_formula=prompt("what do you want to find 1)w 2)m")
    if (weight_formula==1){
        
    }
}
