$(".parameter-percentage").each(function (index, element) {
    let percent = parseInt(element.innerHTML.replace("%", ""));
    console.log(percent);

    if (percent > 60) {
        element.style.color = "#1b5e20";
    }
    else if (percent > 35) {
        element.style.color = "#ff6d00";
    }
    else {
        element.style.color = "#d50000";
    }
});