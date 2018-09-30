const description = document.querySelectorAll(".card p");


function hideElement(array) {
    for (let i = 0; i < array.length; i += 1) {
        array[i].className = "hide";
    }
}

hideElement(description);


const companies = [
    {
        name: "ninjio",
        price: 1000,
        country: "US",
        size: "M"
    },
    {
        name: "xyone",
        price: 2000,
        country: "US",
        size: "S"
    },
    {
        name: "kaspersky",
        price: 4500,
        country: "RU",
        size: "L"
    },
    {
        name: "jaw",
        price: 2000,
        country: "AT",
        size: "S"
    },
    {
        name: "apmg",
        price: 3000,
        country: "US",
        size: "M"
    },
    {
        name: "nettitude",
        price: 3200,
        country: "UK",
        size: "S"
    },
    {
        name: "ataata",
        price: 1000,
        country: "US",
        size: "S"
    },
    {
        name: "cento",
        price: 1000,
        country: "UK",
        size: "S"
    },
];

// Filter companies

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