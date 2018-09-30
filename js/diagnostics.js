$(".parameter").each(function (index, element) {
    let percent = parseInt($(element).find(".parameter-percentage").first().text().replace("%", ""));
    console.log($(element).find(".parameter-name").first().attr("class"));
    if (percent > 83) {
        $(element).find(".parameter-name").first().addClass("green");
    }
    else if (percent > 49) {
        $(element).find(".parameter-name").first().addClass("yellow");
    }
    else if (percent >= 38) {
        $(element).find(".parameter-name").first().addClass("orange");
    }
    else {
        $(element).find(".parameter-name").first().addClass("red");
    }
});

// MODAL

// DISPLAY MODAL

const $awareness_field = $(".parameter");
const $awareness_questionaire = $("#questionaire_modal");

$awareness_field.click( () => {
    $awareness_questionaire.fadeIn(600);
})