// function d_div() {
//     document.getElementById("box").style.width = prompt("Enter the box width")
//     document.getElementById("box").style.height = prompt("Enter the height box ")
//     document.getElementById("box").style.border = prompt("Enter the border properties for box ")
//     document.getElementById("box").style.margin = prompt("Enter the margin for box ")
//     document.getElementById("box").style.backgroundColor = prompt("Enter the background colour for box ")
//     document.getElementById("box").style.color = prompt("Enter the colour for box ")
//     document.getElementById("box").style.textAlign = "center"
//     document.getElementById("box").style.padding = "50px 10px"


// }

// function d_text() {
//     document.getElementById("box").innerText = prompt("Enter text")
// }


function submit_value(){

    let Height= document.getElementById("height").value;
    let Width = document.getElementById("width").value;
    let bg_Clr = document.getElementById("back-ground").value;
    let Border = document.getElementById("border").value;
    let Text = document.getElementById("text").value;

    document.getElementById("result_div").style.height = Height;
    document.getElementById("result_div").style.width = Width;
    document.getElementById("result_div").style.backgroundColor = bg_Clr;
    document.getElementById("result_div").style.border = Border;
    document.getElementById("result_div").innerText = Text;
}


