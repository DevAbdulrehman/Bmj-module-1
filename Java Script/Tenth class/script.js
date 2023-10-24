// Array method concat()
// let element1 =["1","2","3","4"];
// let element2 =["a","b","c","d"];
// let element3 =element1.concat(element2);
// console.log(element3)


// Array method join()
// let element1 =["1","2","3","4"];
// console.log(element1.join("|"))
// console.log(element1.join("&"))
// console.log(element1.join("'"))
// console.log(element1.join(","))
// console.log(element1.join("+"))

// Array method slice()
// let Names =["Ali","Basit","Hassan","Hashim","Abdullah"]
// console.log(Names.slice(1,5))

// Array method splice()
// let Names =["Ali","Basit","Hassan","Hashim","Abdullah"]
// Names.splice(3,0,'Zubair')
// console.log(Names)
// let months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months)

// let math={
//     add: function (a,b) {
//         console.log(a+b)
//     },
//     sub: function (a,b) {
//         console.log(a-b)
//     },
//     mul: function (a,b) {
//         console.log(a*b)
//     },
//     divide: function (a,b) {
//         console.log(a/b)
//     }
// }

// math.add(20,3)
// // You can also use prompt
// math.sub(20,3)
// // You can also use prompt
// math.mul(20,3)
// // You can also use prompt
// math.divide(20,3)
// //  You can also use prompt

// // Array methos isArray()
// console.log(Array.isArray([1, 3, 5]));
// // Expected output: true

// console.log(Array.isArray('[]'));
// // Expected output: false

// Task
// let names=[]
// function push(){
//     add_names={
//         name:prompt("Enter your name"),
//     }
//     names.push(add_names);
//     console.log(names);

// }

// function splice(){
//     names.splice(prompt("Enter the index of a user"),1)
//     console.log(names)
// }

// function add(){
//     names.splice(prompt("Enter the index of a user to add"),0,{
//         name:prompt("Enter your name"),
//     })
//     console.log(names)
// }

function myFunction(){
  let  liveText= document.getElementById("live").value;
  document.getElementById("show").innerText=liveText;
}