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
        size: 2
    },
    {
        name: "xyone",
        price: 2000,
        country: "US",
        size: 1
    },
    {
        name: "kaspersky",
        price: 4500,
        country: "RU",
        size: 3
    },
    {
        name: "jaw",
        price: 2000,
        country: "AT",
        size: 1
    },
    {
        name: "apmg",
        price: 3000,
        country: "US",
        size: 2
    },
    {
        name: "nettitude",
        price: 3200,
        country: "UK",
        size: 1
    },
    {
        name: "ataata",
        price: 1000,
        country: "US",
        size: 1
    },
    {
        name: "cento",
        price: 1000,
        country: "UK",
        size: 1
    },
];

// Filter companies by price

const price = document.querySelector("#price");
const cards = document.querySelectorAll(".card");

price.addEventListener("change", (event) => {

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

// Filter companies by size

const company_size = document.querySelector("#size");

company_size.addEventListener("change", () => {
    let size_value = company_size.value;

    console.log(size_value);

    for ( let i = 0; i < companies.length; i += 1) {
        if (parseInt(companies[i]["size"]) == parseInt(size_value)) {
            console.log(companies[i]["name"]);
        }
    }
});