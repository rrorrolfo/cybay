$(".parameter").each(function (index, element) {
    let percent = parseInt($(element).find(".parameter-percentage").first().text().replace("%", ""));
    console.log(percent);
    if (percent > 83) {
        element.style.background = "#1b5e20";
    }
    else if (percent > 49) {
        element.style.background = "#ffd600";
    }
    else if (percent >= 38) {
        element.style.background = "#ff6d00";
    }
    else {
        element.style.background = "#d50000";
    }
});

// MODAL

// DISPLAY MODAL

const $awareness_field = $(".parameter");
const $awareness_questionaire = $("#questionaire_modal");

$awareness_field.click( () => {
    $awareness_questionaire.fadeIn(600);
})