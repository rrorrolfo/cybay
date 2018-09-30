const description = document.querySelectorAll(".card p");

for (let i = 0; i < description.length; i += 1) {
    description[i].className = "hide";
}

const companies = [
    {
        name: "ninjio",
        price: 1000,
        country: "US"
    },
    {
        name: "xyone",
        price: 2000,
        country: "US"
    },
    {
        name: "kaspersky",
        price: 4500,
        country: "RU"
    },
    {
        name: "jaw",
        price: 2000,
        country: "AT"
    },
    {
        name: "apmg",
        price: 3000,
        country: "US"
    },
    {
        name: "nettitude",
        price: 3200,
        country: "UK"
    },
    {
        name: "ataata",
        price: 1000,
        country: "US"
    },
    {
        name: "cento",
        price: 1000,
        country: "UK"
    },
];

// Filter companies

const price = document.querySelector("#price");

price.addEventListener("change", (event) => {
    console.log(price.value);
});