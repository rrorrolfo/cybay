const description = document.querySelectorAll(".card p");


function hideElement(array) {
    for (let i = 0; i < array.length; i += 1) {
        array[i].className = "hide";
    }
}

hideElement(description);

// Filter companies by price

const price = document.querySelector("#price");
const cards = document.querySelectorAll(".card");

price.addEventListener("change", (event) => {
    console.log(price.value);
    let selected_price = parseInt(price.value);

for(let i = 0; i < cards.length; i += 1) {
    let a = parseInt(description[i].textContent);

    if (selected_price < a) {
        cards[i].className = " ";
        cards[i].className += "card hide";
    } else if (selected_price > a) {
        cards[i].className = " ";
        cards[i].className += "card show";
    }
}

});