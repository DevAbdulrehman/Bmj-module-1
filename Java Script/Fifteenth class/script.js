let users = [];

function addProd() {
  let prdImg = document.getElementById("pLink").value;
  let prdHd = document.getElementById("pTitle").value;
  let prdDesc = document.getElementById("pDesc").value;
  let prdPrice = document.getElementById("pPrice").value;

  users.push({
    ProductImg: prdImg,
    ProductHd: prdHd,
    productDesc: prdDesc,
    productPrice: prdPrice,
  });

  let card = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardHd = document.createElement("h5");
  let cardDesc = document.createElement("p");
  let cardPrice = document.createElement("span");

  users.map((elements, index) => {
    card.classList.add("card");
    cardImg.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardHd.classList.add("card-title");
    cardDesc.classList.add("card-text");
    cardPrice.classList.add("card-price");

    cardImg.src = elements.ProductImg;
    cardHd.innerText = elements.ProductHd;
    cardDesc.innerText = elements.productDesc;
    cardPrice.innerText = elements.productPrice;

    card.appendChild(cardImg);
    card.appendChild(cardBody);
    card.appendChild(cardHd);
    card.appendChild(cardDesc);
    card.appendChild(cardPrice);

    document.getElementById("container").appendChild(card);
  });
  document.getElementById("pLink").value ="";
document.getElementById("pTitle").value ="";
document.getElementById("pDesc").value ="";
document.getElementById("pPrice").value ="";
}
