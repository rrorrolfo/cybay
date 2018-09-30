const description = document.querySelectorAll(".card p");

for (let i = 0; i < description.length; i += 1) {
    description[i].className = "hide";
}

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

price.addEventListener("change", (event) => {
    console.log(price.value);
});