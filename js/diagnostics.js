//$(".parameter").each(function (index, element) {
 //   let percent = parseInt($(element).find(".parameter-percentage").first().text()//.replace("%", ""));
   // console.log($(element).find(".parameter-name").first().attr("class"));
 //   if (percent > 83) {
   //     $(element).find(".parameter-name").first().addClass("green");
  //  }
   // else if (percent > 49) {
    //    $(element).find(".parameter-name").first().addClass("yellow");
    //}
    //else if (percent >= 38) {
      //  $(element).find(".parameter-name").first().addClass("orange");
   //}
   // else {
     //   $(element).find(".parameter-name").first().addClass("red");
   // }
//});


const parameter = document.querySelectorAll(".parameter-name");
const parameter_percentage = document.querySelectorAll(".parameter-percentage");

function x () {

    for (let i = 0; i < parameter.length; i += 1) {

        if (parseInt(parameter_percentage[i].textContent) < 38) {
            parameter[i].parentNode.className += " red"
        } else if (parseInt(parameter_percentage[i].textContent) < 50) {
            parameter[i].parentNode.className += " yellow"
        } else if(parseInt(parameter_percentage[i].textContent) < 84) {
            parameter[i].parentNode.className += " orange"
        } else if(parseInt(parameter_percentage[i].textContent) >= 85 ) {
            parameter[i].parentNode.className += " green"
        }

    }

}

x();

$(function(){
    $.switcher();
});

$("button").hide();

$("input").change(function () {
    if ($(this)[0].checked) {
        $(this).parent().find("button").show();
    } else {
        $(this).parent().find("button").hide();
    }
})


// MODAL

// DISPLAY MODAL

const $awareness_field = $(".parameter");
const $awareness_questionaire = $("#questionaire_modal");

$awareness_field.click( () => {
    $awareness_questionaire.fadeIn(600);
})
