$(".parameter").each(function (index, element) {
    let percent = parseInt($(element).find(".parameter-percentage").first().text().replace("%", ""));

    if (percent > 83) {
        element.style.background = "#1b5e20";
    }
    else if (percent > 49) {
        element.style.background = "#ff6d00";
    }
    else if (percent >= 38) {
        element.style.background = "rgb(216, 184, 4)";
    }
    else {
        element.style.background = "#d50000";
    }
});